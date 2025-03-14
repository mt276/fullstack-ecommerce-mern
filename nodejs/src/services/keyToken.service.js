'use strict'

const keyTokenModel = require('../models/keyToken.model')

class KeyTokenService {

    static createKeyTokenRSA = async ({ userId, publicKey }) => {
        try {
            const publicKeyString = publicKey.toString()
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey: publicKeyString
            })

            return tokens ? tokens.publicKey : null
        } catch (error) {
            return error
        }
    }
    static createKeyTokenAES = async ({ userId, publicKey, privateKey }) => {
        try {
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey,
                privateKey
            })

            return tokens ? tokens.publicKey : null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService