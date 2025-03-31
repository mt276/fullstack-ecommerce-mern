'use strict'

const express = require('express')
const cartController = require('../../controllers/cart.controller')
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')
const router = express.Router()

//authentication//
router.use(authentication)

router.post('/', asyncHandler(cartController.addToCart))
router.post('/update/', asyncHandler(cartController.updateToCart))
router.delete('/', asyncHandler(cartController.deleteToCart))
router.get('/', asyncHandler(cartController.listToCart))

module.exports = router