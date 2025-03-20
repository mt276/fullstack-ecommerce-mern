'use strict'

const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Inventory'
const COLLECTION_NAME = 'inventories'
// Declare the Schema of the Mongo model
const inventorySchema = new Schema({
    inventory_productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    inventory_location: { type: String, default: 'unKnow' },
    inventory_stock: { type: Number, required: true, default: 0 },
    inventory_shopId: { type: Schema.Types.ObjectId, ref: 'Shop' },
    inventory_reservations: { type: Array, default: [] }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = {
    inventory: model(DOCUMENT_NAME, inventorySchema)
}