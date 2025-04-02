'use strict'

const { cart } = require("../models/cart.model")
const { BadRequestError } = require("../core/error.response")
const { convertToObjectIdMongodb } = require("../utils")
const { findCartById } = require("../models/repositories/cart.repo")
const { checkProductByServer } = require("../models/repositories/product.repo")
const { getDiscountAmount } = require("../services/discount.service")
const { product } = require("../models/product.model")
const { order } = require("../models/order.model")
const { acquireLock, releaseLock } = require("./redis.service")

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

    //order
    static async orderByUser({
        shop_order_ids_new,
        cartId,
        userId,
        user_address = {},
        user_payment = {}
    }) {
        const { shop_order_ids_new, checkout_order } = await CheckoutService.checkoutReview({
            cartId,
            userId,
            shop_order_ids
        })

        //check lai mot lan nua xem co vuot ton kho hay khong
        //get new array Products
        const products = shop_order_ids_new.flatMap(order => order.item_products)
        const acquireProduct = []
        for (let i = 0; i < products.length; i++) {
            const { productId, quantity } = products[i]
            const keyLock = await acquireLock(productId, quantity, cartId)
            acquireProduct.push(keyLock ? true : false)
            if (keyLock) {
                await releaseLock(keyLock)
            }
        }

        //check if co mot san pham het hang trong kho
        if (acquireProduct.includes(false)) {
            throw new BadRequestError('Mot so san pham da duoc cap nhat, vui long quay lai giao hang...')
        }
        const newOrder = await order.create({
            order_userId: userId,
            order_checkout: checkout_order,
            order_shipping: user_address,
            order_payment: user_payment,
            order_products: shop_order_ids_new
        })
        //truong hop: insert thanh cong cong, remove product in cart
        if (newOrder) {
            //remove product in my cart
        }

        return newOrder
    }

    static async getOrdersByUser() {

    }

    static async getOneOrderByUser() {

    }

    static async cancelOrderByUser() {

    }

    static async updateOrderStatusByShop() {

    }
}

module.exports = CheckoutService