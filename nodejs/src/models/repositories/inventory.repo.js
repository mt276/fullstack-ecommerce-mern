'use strict'

const insertInventory = async ({
    productId, shopId, stock, location = 'unKnow', model
}) => {
    return await model.inventory.create({
        inventory_productId: productId,
        inventory_shopId: shopId,
        inventory_stock: stock,
        inventory_location: location
    })
}

module.exports = {
    insertInventory
}