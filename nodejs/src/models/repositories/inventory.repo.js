'use strict'

const { convertToObjectIdMongodb } = require("../../utils")

const insertInventory = async ({
    productId, shopId, stock, location = 'unKnow', model
}) => {
    return await model.create({
        inventory_productId: productId,
        inventory_shopId: shopId,
        inventory_stock: stock,
        inventory_location: location
    })
}

const reservationInventory = async ({ productId, quantity, cartId, model }) => {
    const query = {
        inventory_productId: convertToObjectIdMongodb(productId),
        inventory_stock: { $gte: quantity }
    }, updateSet = {
        $inc: {
            inventory_stock: -quantity
        },
        $push: {
            inventory_reservations: {
                quantity,
                cartId,
                createAt: new Date()
            }
        }
    }, options = { upsert: true, new: true }

    return await model.updateOne(query, updateSet)
}

module.exports = {
    insertInventory,
    reservationInventory
}