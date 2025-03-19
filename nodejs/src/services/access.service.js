'use strict'

const bcrypt = require('bcrypt')
const crypto = require('crypto')
const shopModel = require('../models/shop.model')
const KeyTokenService = require('./keyToken.service')
const { createTokenPair, verifyJWT } = require('../auth/authUtils')
const { getIntoData } = require('../utils/index')
const { BadRequestError, UnauthorizedError, ForbiddenError } = require('../core/error.response')
const { OK, Created } = require('../core/success.response')

//service
const { findByEmail } = require('./shop.service')
const keyTokenModel = require('../models/keyToken.model')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService {

    static signUp = async ({ name, email, password }) => {

        //step1: check email exists?
        const holderShop = await shopModel.findOne({ email }).lean()
        if (holderShop) {
            throw new BadRequestError('Error: Shop already registered!')
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newShop = await shopModel.create({
            name, email, password: passwordHash, roles: [RoleShop.SHOP]
        })

        if (newShop) {

            //#region created privateKey, publicKey - **Asymmetric Encryption** 
            // const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
            //     modulusLength: 4096,
            //     publicKeyEncoding: {
            //         type: 'pkcs1',
            //         format: 'pem'
            //     },
            //     privateKeyEncoding: {
            //         type: 'pkcs1',
            //         format: 'pem'
            //     }
            // })

            // console.log({ privateKey, publicKey }); //save collection KeyStore

            // const publicKeyString = await KeyTokenService.createKeyToken({
            //     userId: newShop._id,
            //     publicKey
            // })

            // if (!publicKeyString) {
            //     return {
            //         code: 'xxx',
            //         message: 'publicKeyString error'
            //     }
            // }

            // const publicKeyObject = crypto.createPublicKey(publicKeyString)

            // console.log(`publicKeyObject::`, publicKeyObject);

            // //create token pair
            // const tokens = await createTokenPair({ userId: newShop._id, email }, publicKeyObject, privateKey)
            // console.log(`Created Token Success::`, tokens);

            //#endregion

            //#region created encrypt, decrypt - **Symmetric Encryption** 
            const privateKey = crypto.randomBytes(64).toString('hex')
            const publicKey = crypto.randomBytes(64).toString('hex')

            const keyStore = await KeyTokenService.createKeyToken({
                userId: newShop._id,
                publicKey,
                privateKey
            })

            if (!keyStore) {
                throw new BadRequestError(`Error: KeyStore error`)
            }

            const tokens = await createTokenPair({ userId: newShop._id, email }, publicKey, privateKey)

            //#endregion

            return new Created({
                message: 'Shop created successfully',
                metadata: {
                    shop: getIntoData({ fields: ['_id', 'name', 'email'], object: newShop }),
                    tokens
                }
            })
        }
        return new OK({
            message: 'Request successful',
            metadata: null
        })
    }

    static login = async ({ email, password, refreshToken = null }) => {

        //1.check email in dbs
        const foundShop = await findByEmail({ email })
        if (!foundShop) throw new BadRequestError('Shop not registered')

        //2.match password
        const match = bcrypt.compare(password, foundShop.password)
        if (!match) throw new UnauthorizedError('Authentication error')

        //3.
        // created privateKey, publicKey
        const privateKey = crypto.randomBytes(64).toString('hex')
        const publicKey = crypto.randomBytes(64).toString('hex')

        //4.generate tokens
        const { _id: userId } = foundShop
        const tokens = await createTokenPair({ userId, email }, publicKey, privateKey)

        await KeyTokenService.createKeyToken({
            refreshToken: tokens.refreshToken,
            privateKey, publicKey, userId
        })
        //5.get data return login
        return new OK({
            message: 'Shop login successfully',
            metadata: {
                shop: getIntoData({ fields: ['_id', 'name', 'email'], object: foundShop }),
                tokens
            }
        })
    }

    static logout = async (keyStore) => {
        const delKey = await KeyTokenService.removeKeyById(keyStore._id)
        console.log({ delKey });
        return delKey
    }

    static handleRefreshToken = async ({ keyStore, user, refreshToken }) => {

        //
        const { userId, email } = user

        if (keyStore.refreshTokensUsed.includes(refreshToken)) {
            await KeyTokenService.deleteKeyById(userId)
            throw new ForbiddenError('Something wrong happened!! Please ReLogin')
        }

        if (keyStore.refreshToken !== refreshToken) throw new UnauthorizedError('Shop not registered')

        //check UserId
        const foundShop = await findByEmail({ email })
        if (!foundShop) throw new UnauthorizedError('Shop not registered')

        //create tokens
        const tokens = await createTokenPair({ userId, email }, keyStore.publicKey, keyStore.privateKey)

        //update token
        await keyTokenModel.updateOne(
            { _id: keyStore._id },
            {
                $set: { refreshToken: tokens.refreshToken },
                $addToSet: { refreshTokensUsed: refreshToken }
            }
        );

        return {
            user,
            tokens
        }
    }

}

module.exports = AccessService