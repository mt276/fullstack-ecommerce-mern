'use strict'

const { BadRequestError, NotFoundError } = require("../core/error.response")
const { inventory } = require("../models/inventory.model")
const { getProductId } = require("../models/repositories/product.repo")
const { convertToObjectIdMongodb, removeUndefinedObject, updateNestedObjectParser } = require("../utils")

class InventoryService {

    static async addStockToInventory({
        stock,
        productId,
        shopId,
        location = 'an phu dong, quan 12, hcm'
    }) {
        const product = await getProductId(productId)
        if (!product) throw new BadRequestError('The product does not exists!')
        const query = { inventory_shopId: shopId, inventory_productId: productId },
            updateSet = {
                $inc: {
                    inventory_stock: stock
                },
                $set: {
                    inventory_location: location
                }
            }, options = { upsert: true, new: true }

        return await inventory.findOneAndUpdate(query, updateSet, options)

    }

}

module.exports = InventoryService