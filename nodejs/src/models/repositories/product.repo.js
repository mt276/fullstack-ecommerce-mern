'use strict'

const { getSelectData, unGetSelectData, convertToObjectIdMongodb } = require('../../utils')

const findAllDraftsForShop = async ({ query, limit, skip, model }) => {
    return await queryProduct({ query, limit, skip, model })
}

const findAllPublishForShop = async ({ query, limit, skip, model }) => {
    return await queryProduct({ query, limit, skip, model })
}

const searchProductByUser = async ({ keySearch, model }) => {
    const regexSearch = new RegExp(keySearch)
    const results = await model.find({
        isDraft: true,
        $text: { $search: regexSearch }
    }, {
        score: { $meta: 'textScore' }
    })
        .sort({ score: { $meta: 'textScore' } })
        .lean()

    return results
}

const publishProductByShop = async ({ product_shop, product_id, model }) => {
    const foundShop = await model.findOne({
        product_shop: convertToObjectIdMongodb(product_shop),
        _id: convertToObjectIdMongodb(product_id)
    })
    if (!foundShop) return null

    foundShop.isDraft = false
    foundShop.isPublished = true
    const { modifiedCount } = await foundShop.save();

    return modifiedCount
}
const unPublishProductByShop = async ({ product_shop, product_id, model }) => {
    const foundShop = await model.findOne({
        product_shop: convertToObjectIdMongodb(product_shop),
        _id: convertToObjectIdMongodb(product_id)
    })
    if (!foundShop) return null

    foundShop.isDraft = true
    foundShop.isPublished = false
    const { modifiedCount } = await foundShop.save();

    return modifiedCount
}

const findAllProducts = async ({ limit, sort, page, filter, select, model }) => {
    const skip = (page - 1) * limit
    const sortBy = sort === 'ctime' ? { _id: -1 } : { _id: 1 }
    const products = await model.find(filter)
        .sort(sortBy)
        .skip(skip)
        .limit(limit)
        .select(getSelectData(select))
        .lean()

    return products
}

const findProduct = async ({ product_id, unSelect, model }) => {
    return await model.findById(product_id).select(unGetSelectData(unSelect))

}

const updateProductById = async ({
    product_id, bodyUpdate, model, isNew = true
}) => {
    return await model.findByIdAndUpdate(product_id, bodyUpdate, {
        new: isNew
    })
}

const queryProduct = async ({ query, limit, skip, model }) => {
    return await model.find(query)
        .populate('product_shop', 'name email -_id')
        .sort({ updateAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec()
}

const getProductId = async ({ productId, model }) => {
    return await model.findOne({ _id: convertToObjectIdMongodb(productId) }).lean()
}

const checkProductByServer = async ({ products, model }) => {
    console.log("products:", products)
    return await Promise.all(products.map(async product => {
        const foundProduct = await getProductId({ productId: product.productId, model })
        if (foundProduct) {
            return {
                price: foundProduct.product_price,
                quantity: product.quantity,
                productId: product.productId
            }
        }

        return null
    }))
}

module.exports = {
    findAllDraftsForShop,
    findAllPublishForShop,
    searchProductByUser,
    publishProductByShop,
    unPublishProductByShop,
    findAllProducts,
    findProduct,
    updateProductById,
    getProductId,
    checkProductByServer
}