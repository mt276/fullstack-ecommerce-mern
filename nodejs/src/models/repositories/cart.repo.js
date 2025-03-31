'use strict'

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

module.exports = {
    createUserCart,
    updateUserCartQuantity,
    deleteUserCart,
    getListUserCart
}