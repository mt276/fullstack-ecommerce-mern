'use strict'

const { convertToObjectIdMongodb } = require("../../utils")

const createUserCart = async ({ userId, product, model }) => {
    const query = { cart_userId: userId, cart_state: 'active' },
        updateInsert = {
            $addToSet: {
                cart_products: product
            }
        }, options = { upsert: true, new: true }

    return await model.findOneAndUpdate(query, updateInsert, options)
}

const updateUserCartQuantity = async ({ userId, product, model }) => {
    const { productId, quantity } = product

    const query = {
        cart_userId: userId,
        'cart_products.productId': productId,
        cart_state: 'active'
    }, updateSet = {
        $inc: {
            'cart_products.$.quantity': quantity
        }
    }, options = { upsert: true, new: true }
    return await model.findOneAndUpdate(query, updateSet, options)
}

const deleteUserCart = async ({ userId, productId, model }) => {
    const query = { cart_userId: userId, cart_state: 'active' },
        updateSet = {
            $pull: {
                cart_products: {
                    productId
                }
            }
        }

    const deleteCart = await model.updateOne(query, updateSet)

    return deleteCart
}

const getListUserCart = async ({ userId, model }) => {
    return await model.findOne({
        cart_userId: +userId
    }).lean()
}

const findCartById = async ({ cartId, model }) => {
    return await model.findOne({ _id: convertToObjectIdMongodb(cartId), cart_state: 'active' }).lean()
}

const findProductByCart = async ({ productId, cartId, model }) => {
    const cart = await model.findOne({
        _id: convertToObjectIdMongodb(cartId),
        cart_state: 'active',
        cart_products: {
            $elemMatch: { productId: convertToObjectIdMongodb(productId) }
        }
    }).lean()

    return cart?.cart_products?.[0] || null;
}

const addProductToCart = async ({ userId, product, model }) => {
    return await model.findOneAndUpdate(
        { cart_userId: userId, cart_state: 'active' },
        { $push: { cart_products: product } },
        { upsert: true, new: true }
    )
}

module.exports = {
    createUserCart,
    updateUserCartQuantity,
    deleteUserCart,
    getListUserCart,
    findCartById,
    findProductByCart,
    addProductToCart
}