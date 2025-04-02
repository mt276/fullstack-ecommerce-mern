'use strict'

const InventoryService = require('../services/inventory.service')
const { SuccessResponse } = require('../core/success.response')

class InventoryController {

    addStockToInventory = async (req, res, next) => {
        new SuccessResponse({
            message: 'Successful new Cart addStockToInventory',
            metadata: await InventoryService.addStockToInventory({
                ...req.body,
                shopId: req.user.userId
            })
        }).send(res)
    }
}

module.exports = new InventoryController()