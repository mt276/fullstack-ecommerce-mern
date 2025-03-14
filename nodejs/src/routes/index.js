const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    return res.send(200).json({
        message: 'Welcome Shopify'
    })
})

router.use('/v1/api/', require('./access/index'))


module.exports = router