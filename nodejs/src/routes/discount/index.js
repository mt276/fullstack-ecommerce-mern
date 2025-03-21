'use strict'

const express = require('express')
const discountController = require('../../controllers/discount.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')
const router = express.Router()

//get amount a discount
// router.post('/amount', asyncHandler(discountController.getDiscountAmount))
// router.post('/list_product_code', asyncHandler(discountController.getAllDiscountCodesWithProducts))



//authentication//
router.use(authentication)

//
router.post('/', asyncHandler(discountController.createDiscountCode))
// router.get('/', asyncHandler(discountController.getAllDiscountCodesByShop))

module.exports = router