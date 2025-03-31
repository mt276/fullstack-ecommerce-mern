'use strict'

const { BadRequestError, NotFoundError } = require("../core/error.response")
const { discount } = require("../models/discount.model")
const { findAllDiscountCodesSelect, findAllDiscountCodesUnSelect, checkDiscountExists } = require("../models/repositories/discount.repo")
const { findAllProducts } = require("../models/repositories/product.repo")
const { convertToObjectIdMongodb, removeUndefinedObject, updateNestedObjectParser } = require("../utils")

class DiscountService {

    static async createDiscountCode(payload) {
        const {
            name, description, type, value, max_value, code,
            shopId, start_date, end_date, max_uses, uses_count,
            users_used, max_uses_per_user, min_order_value,
            is_active, applies_to, product_ids
        } = payload

        //kiem tra
        if (new Date() < new Date(start_date) || new Date() > new Date(end_date))
            throw new BadRequestError('Discount code has expired!')

        if (new Date(start_date) >= new Date(end_date))
            throw new BadRequestError('Start date must be before end_date')

        //create index for discount code
        const foundDiscount = await discount.findOne({
            discount_code: code,
            discount_shopId: convertToObjectIdMongodb(shopId)
        }).lean()

        if (foundDiscount && foundDiscount.discount_is_active)
            throw new BadRequestError('Discount exists!')

        const newDiscount = await discount.create({
            discount_name: name,
            discount_description: description,
            discount_type: type,
            discount_code: code,
            discount_value: value,
            discount_min_order_value: min_order_value ?? 0,
            discount_max_value: max_value,
            discount_start_date: start_date ? new Date(start_date) : null,
            discount_end_date: end_date ? new Date(end_date) : null,
            discount_max_uses: max_uses,
            discount_uses_count: uses_count,
            discount_users_used: users_used,
            discount_shopId: shopId,
            discount_max_uses_per_user: max_uses_per_user,
            discount_is_active: is_active,
            discount_applies_to: applies_to,
            discount_product_ids: applies_to === 'all' ? [] : product_ids
        })

        return newDiscount
    }

    static async updateDiscountCode(discountId, payload) {
        console.log(discountId);
        //1. remove fields has null, undefined 
        const objectParams = removeUndefinedObject(payload)
        //2.kiem tra discount co ton tai khong
        const foundDiscount = await discount.findById(discountId)
        if (!foundDiscount)
            throw new NotFoundError('Discount code not found!')

        //3.kiem tra startDate va endDate
        if (objectParams.discount_start_date || objectParams.discount_end_date) {
            const startDate = objectParams.discount_start_date ? new Date(objectParams.discount_start_date) : foundDiscount.discount_start_date
            const endDate = objectParams.discount_end_date ? new Date(objectParams.discount_end_date) : foundDiscount.discount_start_date
            if (new Date() < startDate || new Date() > endDate) {
                throw new BadRequestError('Discount code has expired!');
            }

            if (startDate >= endDate) {
                throw new BadRequestError('Start date must be before end date');
            }
        }

        // 5. Thực hiện cập nhật
        const updatedDiscount = await discount.findByIdAndUpdate(discountId, { $set: objectParams }, { new: true })
        console.log(updatedDiscount);
        return updatedDiscount
    }

    /*
        Get all discount codes available with products
    */

    static async getAllDiscountCodesWithProducts({
        code, shopId, userId, limit, page
    }) {
        //create index for discount_code
        const foundDiscount = await discount.findOne({
            discount_code: code,
            discount_shopId: convertToObjectIdMongodb(shopId)
        }).lean()

        if (!foundDiscount || !foundDiscount.discount_is_active)
            throw new NotFoundError('Discount not exists!')

        const { discount_applies_to, discount_product_ids } = foundDiscount
        let products
        if (discount_applies_to == 'all') {
            //get all product
            products = await findAllProducts({
                filter: {
                    product_shop: convertToObjectIdMongodb(shopId),
                    isPublished: true
                },
                limit: +limit,
                page: +page,
                sort: 'ctime',
                select: ['product_name']
            })
        }

        if (discount_applies_to == 'specific') {
            //get the products ids
            products = await findAllProducts({
                filter: {
                    _id: { $in: discount_product_ids },
                    isPublished: true
                },
                limit: +limit,
                page: +page,
                sort: 'ctime',
                select: ['product_name']
            })
        }

        return products
    }

    static async getAllDiscountCodesByShop({
        limit, page, shopId
    }) {
        const discounts = findAllDiscountCodesUnSelect({
            limit: +limit,
            page: +page,
            filter: {
                discount_shopId: convertToObjectIdMongodb(shopId),
                discount_is_active: true
            },
            unSelect: ['__v', 'discount_shopId'],
            model: discount
        })

        return discounts
    }

    static async getDiscountAmount({ codeId, userId, shopId, products }) {

        const foundDiscount = await checkDiscountExists({
            model: discount,
            filter: {
                discount_code: codeId,
                discount_shopId: convertToObjectIdMongodb(shopId)
            },
        })

        if (!foundDiscount) throw new NotFoundError(`Discount doesn't exists!`)

        const {
            discount_is_active,
            discount_max_uses,
            discount_min_order_value,
            discount_start_date,
            discount_end_date,
            discount_max_uses_per_user,
            discount_users_used,
            discount_type,
            discount_value
        } = foundDiscount

        if (!discount_is_active) throw new NotFoundError('Discount expired!')
        if (!discount_max_uses) throw new NotFoundError('Discount are out!')

        if (new Date() < new Date(discount_start_date) || new Date() > new Date(discount_end_date))
            throw new NotFoundError('Discount code has expired')

        //check xem co xet gia tri toi thieu hay khong
        let totalOrder = 0
        if (discount_min_order_value > 0) {
            //get total
            totalOrder = products.reduce((acc, product) => {
                return acc + (product.quantity * product.price);
            }, 0)

            if (totalOrder < discount_min_order_value)
                throw new NotFoundError(`Discount requires a minium order value of ${discount_min_order_value}`)
        }


        // Kiểm tra số lần sử dụng của user
        if (discount_max_uses_per_user > 0) {
            const userUsage = discount_users_used.find(user => user.userId = userId)
            if (userUsage && userUsage.uses >= discount_max_uses_per_user) {
                throw new NotFoundError(`You have reached the limit of ${discount_max_uses_per_user} uses for this discount`)
            }
        }

        //check discount nay la fixed_amount hay  percent
        let amount = discount_type === 'fixed_amount' ? discount_value : totalOrder * (discount_value / 100)
        console.log(`amount::::`, amount);
        // Đảm bảo tổng tiền không bị âm sau giảm giá
        amount = Math.min(amount, totalOrder);

        return {
            totalOrder,
            discount: amount,
            totalPrice: totalOrder - amount
        }
    }

    static async deleteDiscountCode({ discountId, shopId }) {

        const deleted = await discount.findOneAndDelete({
            _id: convertToObjectIdMongodb(discountId),
            discount_shopId: convertToObjectIdMongodb(shopId)
        })

        return deleted
    }

    static async cancelDiscountCode({ codeId, shopId, userId }) {

        const foundDiscount = await checkDiscountExists({
            model: discount,
            filter: {
                discount_code: codeId,
                discount_shopId: convertToObjectIdMongodb(shopId)
            }
        })

        if (!foundDiscount) throw new NotFoundError(`Discount doesn't exists!`)

        const {
            discount_is_active,
            discount_end_date,
            discount_users_used = []
        } = foundDiscount;

        // Kiểm tra mã có còn hiệu lực không
        if (!discount_is_active || new Date() > new Date(discount_end_date)) {
            throw new NotFoundError('Discount code is no longer valid');
        }

        // Kiểm tra user đã sử dụng mã giảm giá chưa
        const userUsage = discount_users_used.find(user => user.userId === userId);
        if (!userUsage) {
            throw new NotFoundError('User has not used this discount code');
        }

        // Nếu user đã sử dụng nhiều lần, chỉ giảm số lần dùng thay vì xóa hẳn
        if (userUsage.uses > 1) {
            const result = await discount.findOneAndUpdate(
                { _id: foundDiscount._id, "discount_users_used.userId": userId },
                {
                    $inc: {
                        "discount_users_used.$.uses": -1,
                        discount_uses_count: -1,
                        discount_max_uses: 1
                    }
                },
                { new: true }
            );
            return result;
        } else {
            // Nếu user chỉ dùng 1 lần, xóa user khỏi danh sách
            const result = await discount.findByIdAndUpdate(foundDiscount._id, {
                $pull: { discount_users_used: { userId } },
                $inc: {
                    discount_uses_count: -1,
                    discount_max_uses: 1
                }
            }, { new: true })

            return result
        }
    }
}

module.exports = DiscountService