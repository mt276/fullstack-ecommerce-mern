'use strict'

const keyTokenModel = require('../models/keyToken.model')
const { Types } = require('mongoose')

class KeyTokenService {

    // static createKeyToken = async ({ userId, publicKey }) => {
    //     try {
    //         const publicKeyString = publicKey.toString()
    //         const tokens = await keyTokenModel.create({
    //             user: userId,
    //             publicKey: publicKeyString
    //         })

    //         return tokens ? tokens.publicKey : null
    //     } catch (error) {
    //         return error
    //     }
    // }

    static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }) => {
        try {
            // const tokens = await keyTokenModel.create({
            //     user: userId,
            //     publicKey,
            //     privateKey
            // })
            // return tokens ? tokens.publicKey : null

            const filter = { user: userId }, update = {
                publicKey, privateKey, refreshTokensUsed: [], refreshToken
            }, options = { upsert: true, new: true }

            const tokens = await keyTokenModel.findOneAndUpdate(filter, update, options)

            return tokens ? tokens.publicKey : null
        } catch (error) {
            return error
        }
    }

    static findByUserId = async (userId) => {
        return await keyTokenModel.findOne({ user: new Types.ObjectId(userId) }).lean()
    }

    static removeKeyById = async (id) => {
        return await keyTokenModel.deleteOne(id)
    }

    static findByRefreshTokensUsed = async (refreshToken) => {
        return await keyTokenModel.findOne({ refreshTokensUsed: refreshToken }).lean()
    }

    static findByRefreshToken = async (refreshToken) => {
        return await keyTokenModel.findOne({ refreshToken }).lean()
    }

    static deleteKeyById = async (userId) => {
        return await keyTokenModel.deleteOne({ user: new Types.ObjectId(userId) })
    }


}

module.exports = KeyTokenService