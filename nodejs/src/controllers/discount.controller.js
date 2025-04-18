'use strict'

const DiscountService = require('../services/discount.service')
const { SuccessResponse } = require('../core/success.response')

class DiscountController {

    createDiscountCode = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.createDiscountCode({
                ...req.body,
                shopId: req.user.userId
            })
        }).send(res)
    }

    update = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.addToCartQuantity(
                req.params.discount_id, {
                ...req.body,
                shopId: req.user.userId
            })
        }).send(res)
    }

    getAllDiscountCodesWithProducts = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Found',
            metadata: await DiscountService.getAllDiscountCodesWithProducts({
                ...req.query,
                // shopId: req.user.userId
            })
        }).send(res)
    }

    getAllDiscountCodesByShop = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.getAllDiscountCodesByShop({
                ...req.query,
            })
        }).send(res)
    }

    getDiscountAmount = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.getDiscountAmount({
                ...req.body
            })
        }).send(res)
    }

    deleteDiscountCode = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.deleteDiscountCode({
                discountId: req.params.discount_id,
                shopId: req.user.userId
            })
        }).send(res)
    }

    cancelDiscountCode = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful Code Generations',
            metadata: await DiscountService.cancelDiscountCode({
                ...req.body,
                shopId: req.user.userId
            })
        }).send(res)
    }
}

module.exports = new DiscountController()