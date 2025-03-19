'use strict'

const express = require('express')
const accessController = require('../../controllers/access.controller')
const router = express.Router()
const asyncHandler = require('../../helpers/asyncHandler')
const { authentication } = require('../../auth/authUtils')

//login
router.post('/shop/login', asyncHandler(accessController.login))
//signUp
router.post('/shop/signup', asyncHandler(accessController.signUp))

//authentication
router.use(authentication)

//logout
router.post('/shop/logout', asyncHandler(accessController.logout))
//refresh-token
router.post('/shop/refresh-token', asyncHandler(accessController.handleRefreshToken))

module.exports = router