'use strict'

const { cart } = require("../models/cart.model")
//const { checkout } = require("../models/checkout.model")
const { BadRequestError, NotFoundError } = require("../core/error.response")
const { checkout } = require("../models/checkout.model")
const { convertToObjectIdMongodb } = require("../utils")
const { findCartById } = require("../models/repositories/cart.repo")
const { checkProductByServer } = require("../models/repositories/product.repo")
const { getDiscountAmount } = require("../services/discount.service")
const { product } = require("../models/product.model")

class CheckoutService {

    static async checkoutReview({ cartId, userId, shop_order_ids }) {
        //check cartId co ton tai k
        const foundCart = await findCartById({ cartId, model: cart })
        console.log(`foundCart`, foundCart);
        if (!foundCart) throw new BadRequestError('Cart does not exists!')

        const checkout_order = {
            totalPrice: 0, //tong tien hang
            feeShip: 0, //phi van chuyen
            totalDiscount: 0,// tong tien discount giam gia
            totalCheckout: 0, //tong thanh toan
        }
        const shop_order_ids_new = []

        //tinh tong tien bill
        for (let i = 0; i < shop_order_ids.length; i++) {
            const { shopId, shop_discounts = [], item_products = [] } = shop_order_ids[i]
            //check product available
            const checkProductServer = await checkProductByServer({
                products: item_products,
                model: product
            })
            if (!checkProductServer[0]) throw new BadRequestError('order wrong!!')
            const checkoutPrice = checkProductServer.reduce((acc, product) => {
                return acc + (product.quantity * product.price)
            }, 0)

            //tong tien truoc khi xu ly
            checkout_order.totalPrice += checkoutPrice

            const itemCheckout = {
                shopId,
                shop_discounts,
                priceRaw: checkoutPrice, // tien truoc khi giam gia
                priceApplyDiscount: checkoutPrice,
                item_products: checkProductServer
            }

            //neu shop_discounts ton tai > 0, check xem co hop le khong
            if (shop_discounts.length > 0) {
                const { totalPrice = 0, discount = 0 } = await getDiscountAmount({
                    codeId: shop_discounts[0].codeId,
                    userId,
                    shopId,
                    products: checkProductServer
                })

                //tong cong discount giam gia
                checkout_order.totalDiscount += discount

                //neu tien giam gia lon hon 0
                if (discount > 0) {
                    itemCheckout.priceApplyDiscount = checkoutPrice - discount
                }


            }

            //tong thanh toan cuoi cung
            checkout_order.totalCheckout += itemCheckout.priceApplyDiscount
            shop_order_ids_new.push(itemCheckout)


        }

        return {
            shop_order_ids,
            shop_order_ids_new,
            checkout_order
        }
    }


}

module.exports = CheckoutService