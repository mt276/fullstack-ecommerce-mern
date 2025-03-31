'use strict'

const { cart } = require("../models/cart.model")
const { product } = require("../models/product.model")
const { createUserCart, updateUserCartQuantity, deleteUserCart, getListUserCart } = require("../models/repositories/cart.repo")
const { getProductId } = require("../models/repositories/product.repo")
const { NotFoundError } = require('../core/error.response')

/*
    Key Features: Cart Service
    - add product to cart [user]
    - reduce product quantity by one [user]
    - increase product quantity by One [user]
    - get cart [user]
    - delete cart [user]
    - delete cart item [user]
 */

class CartService {
    static async addToCart({ userId, product = {} }) {

        //check cart ton tai hay khong
        const userCart = await cart.findOne({ cart_userId: userId })
        if (!userCart) {
            //create cart for User
            return await createUserCart({ userId, product, model: cart })
        }

        //neu co gio hang roi nhung chua co san pham
        if (!userCart.cart_products.length) {
            userCart.cart_products = [product]
            return await userCart.save()
        }

        //gio hang ton tai, va co san pham nay thi update quantity
        return await updateUserCartQuantity({ userId, product, model: cart })
    }

    //update
    static async updateToCart({ userId, shop_order_ids }) {
        const { productId, quantity, old_quantity } = shop_order_ids[0]?.item_products[0]
        console.log(productId, quantity, old_quantity);
        //check product
        const foundProduct = await getProductId({ productId, model: product })
        if (!foundProduct) throw new NotFoundError('')
        //compare
        if (foundProduct.product_shop.toString() !== shop_order_ids[0]?.shopId) {
            throw new NotFoundError('Product do not belong to the shop')
        }

        if (quantity === 0) {
            //deleted
            return await deleteUserCart({ userId, productId, model: cart })
        }

        return await updateUserCartQuantity({
            userId,
            product: {
                productId,
                quantity: quantity - old_quantity
            },
            model: cart
        })
    }

    static async getListUserCart({ userId }) {
        return await getListUserCart({ userId, model: cart })
    }

    static async deleteToCartItem({ userId, productId }) {
        return await deleteUserCart({ userId, productId, model: cart })
    }

}

module.exports = CartService