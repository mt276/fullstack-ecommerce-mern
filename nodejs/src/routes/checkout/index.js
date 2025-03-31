'use strict'

const express = require('express')
const checkoutController = require('../../controllers/checkout.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')
const router = express.Router()

//get amount a checkout
router.post('/review', asyncHandler(checkoutController.checkoutReview))
//authentication//
router.use(authentication)

module.exports = router