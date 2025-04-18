'use strict'

const { BadRequestError } = require('../core/error.response')
const { product, clothing, electronic, furniture } = require('../models/product.model')
const { inventory } = require('../models/inventory.model')

const {
    findAllDraftsForShop,
    publishProductByShop,
    unPublishProductByShop,
    findAllPublishForShop,
    searchProductByUser,
    findAllProducts,
    findProduct,
    updateProductById
} = require('../models/repositories/product.repo')
const { insertInventory } = require('../models/repositories/inventory.repo')
const { removeUndefinedObject, updateNestedObjectParser } = require('../utils')

//define factory class to create product
class ProductFactory {
    /*
        type: 'Clothing,
        payload 
    */

    static productRegistry = {}

    static registerProductType(type, classRef) {
        ProductFactory.productRegistry[type] = classRef
    }

    //create
    static async createProduct(type, payload) {
        const productClass = ProductFactory.productRegistry[type]
        if (!productClass) throw new BadRequestError(`Invalid Product Types ${type}`)

        return new productClass(payload).createProduct()
    }

    //update
    static async updateProduct(type, product_id, payload) {
        const productClass = ProductFactory.productRegistry[type]
        if (!productClass) throw new BadRequestError(`Invalid Product Types ${type}`)

        return new productClass(payload).updateProduct(product_id)
    }

    //put
    static async publishProductByShop({ product_shop, product_id }) {
        return await publishProductByShop({ product_shop, product_id, model: product })
    }

    static async unPublishProductByShop({ product_shop, product_id }) {
        return await unPublishProductByShop({ product_shop, product_id, model: product })
    }

    //query
    static async findAllDraftsForShop({ product_shop, limit = 50, skip = 0 }) {
        const query = { product_shop, isDraft: true }
        return await findAllDraftsForShop({ query, limit, skip, model: product })
    }

    static async findAllPublishForShop({ product_shop, limit = 50, skip = 0 }) {
        const query = { product_shop, isPublished: true }
        return await findAllPublishForShop({ query, limit, skip, model: product })
    }

    static async searchProducts({ keySearch }) {
        return await searchProductByUser({ keySearch, model: product })
    }

    static async findAllProducts({ limit = 50, sort = 'ctime', page = 1, filter = { isPublished: true } }) {
        return await findAllProducts({
            limit, sort, filter, page,
            select: ['product_name', 'product_price', 'product_thumb', 'product_shop'],
            model: product
        })
    }

    static async findProduct({ product_id }) {
        return await findProduct({ product_id, unSelect: ['__v', 'product_validations'], model: product })
    }
}

class Product {
    constructor({
        product_name, product_thumb, product_description, product_price,
        product_quantity, product_type, product_shop, product_attributes
    }) {
        this.product_name = product_name
        this.product_thumb = product_thumb
        this.product_description = product_description
        this.product_price = product_price
        this.product_quantity = product_quantity
        this.product_type = product_type
        this.product_shop = product_shop
        this.product_attributes = product_attributes
    }

    //create new product
    async createProduct(product_id) {
        const newProduct = await product.create({ ...this, _id: product_id })
        if (newProduct) {
            //add product_stock in inventory collection
            await insertInventory({
                productId: newProduct._id,
                shopId: this.product_shop,
                stock: this.product_quantity,
                model: inventory
            })
        }
        return newProduct
    }

    //update product
    async updateProduct(product_id, bodyUpdate) {
        return await updateProductById({ product_id, bodyUpdate, model: product })
    }

}

//Define sub-class for different product types Clothing
class Clothing extends Product {
    async createProduct() {
        const newClothing = await clothing.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newClothing) throw new BadRequestError('create new Clothing error')

        const newProduct = await super.createProduct(newClothing._id)
        if (!newProduct) throw new BadRequestError('create new  Product error')

        return newProduct
    }

    //update
    async updateProduct(product_id) {

        //1. remove fields has null, undefined 
        const objectParams = removeUndefinedObject(this)
        //2. check update location
        if (objectParams.product_attributes) {
            //update child
            await updateProductById({
                product_id,
                bodyUpdate: updateNestedObjectParser(objectParams.product_attributes),
                model: clothing
            })
        }

        const updateProduct = await super.updateProduct(product_id, updateNestedObjectParser(objectParams.product_attributes))
        return updateProduct
    }
}

//Define sub-class for different product types Electronics
class Electronics extends Product {
    async createProduct() {
        const newElectronic = await electronic.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newElectronic) throw new BadRequestError('create new Electronics error')

        const newProduct = await super.createProduct(newElectronic._id)
        if (!newProduct) throw new BadRequestError('create new  Product error')

        return newProduct
    }

    //update
    async updateProduct(product_id) {

        //1. remove attr has null, undefined 
        const objectParams = removeUndefinedObject(this)
        //2. check update location
        if (objectParams.product_attributes) {
            //update child
            await updateProductById({
                product_id,
                bodyUpdate: updateNestedObjectParser(objectParams.product_attributes),
                model: electronic
            })
        }

        const updateProduct = await super.updateProduct(product_id, updateNestedObjectParser(objectParams.product_attributes))
        return updateProduct
    }
}

//Define sub-class for different product types Furnitures
class Furnitures extends Product {
    async createProduct() {
        const newFurniture = await furniture.create({
            ...this.product_attributes,
            product_shop: this.product_shop
        })
        if (!newFurniture) throw new BadRequestError('create new Furnitures error')

        const newProduct = await super.createProduct(newFurniture._id)
        if (!newProduct) throw new BadRequestError('create new  Product error')

        return newProduct
    }

    //update
    async updateProduct(product_id) {

        //1. remove attr has null, undefined 
        const objectParams = removeUndefinedObject(this)
        //2. check update location
        if (objectParams.product_attributes) {
            //update child
            await updateProductById({
                product_id,
                bodyUpdate: updateNestedObjectParser(objectParams.product_attributes),
                model: furniture
            })
        }

        const updateProduct = await super.updateProduct(product_id, updateNestedObjectParser(objectParams.product_attributes))
        return updateProduct
    }
}

ProductFactory.registerProductType('Clothing', Clothing)
ProductFactory.registerProductType('Electronics', Electronics)
ProductFactory.registerProductType('Furnitures', Furnitures)


module.exports = ProductFactory
