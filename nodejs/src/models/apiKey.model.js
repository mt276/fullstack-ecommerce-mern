'use strict'

const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'ApiKey'
const COLLECTION_NAME = 'apiKeys'
// Declare the Schema of the Mongo model
const apiKeySchema = new Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    },
    permissions: {
        type: [String],
        required: true,
        enum: ['0000', '1111', '2222']
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = {
    apiKey: model(DOCUMENT_NAME, apiKeySchema)
}