'use strict'

const CartService = require("../services/cart.service")
const { SuccessResponse } = require('../core/success.response')

class CartController {
    addToCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Add to Cart',
            metadata: await CartService.addToCart(req.body)
        }).send(res)
    }

    updateToCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Update to Cart',
            metadata: await CartService.updateToCart(req.body)
        }).send(res)
    }

    deleteToCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful delete Cart',
            metadata: await CartService.deleteToCartItem(req.body)
        }).send(res)
    }

    listToCart = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful List Cart',
            metadata: await CartService.getListUserCart(req.query)
        }).send(res)
    }
}

module.exports = new CartController()