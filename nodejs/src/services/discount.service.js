'use strict'

const { find } = require("lodash")
const { BadRequestError, NotFoundError } = require("../core/error.response")
const { discount } = require("../models/discount_model")
const { findAllDiscountCodesSelect, findAllDiscountCodesUnSelect } = require("../models/repositories/discount.repo")
const { findAllProducts } = require("../models/repositories/product.repo")
const { convertToObjectIdMongodb } = require("../utils")

class DiscountService {

    static async createDiscountCode(payload) {
        const {
            code, start_date, end_date, is_active,
            shopId, min_order_value, product_ids, applies_to,
            name, description, type, value, max_uses, uses_count,
            max_uses_per_user
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

        //update discount
        const updateDiscount = await discount.findByIdAndUpdate(discountId, objectParams, { new: true })

        return updateDiscount
    }

    /*
        Get all discount codes available with products
    */

    static async getAllDiscountCodesWithProduct({
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
}

module.exports = new DiscountService()