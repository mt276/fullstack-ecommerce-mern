'use strict'

const JWT = require('jsonwebtoken')
const asyncHandler = require('../helpers/asyncHandler')
const { UnauthorizedError, NotFoundError } = require('../core/error.response')

//service
const { findByUserId } = require('../services/keyToken.service')

const HEADER = {
    API_KEY: 'x-api-key',
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization'
}


const createTokenPair = async (payload, publicKey, privateKey) => {
    try {
        // // Access Token: Ký bằng Private Key, xác thực bằng Public Key.
        // const accessToken = await JWT.sign(payload, privateKey, {
        //     algorithm: 'RS256',
        //     expiresIn: '2 days'
        // })
        // //Refresh Token: Ký bằng Private Key, xác thực bằng Private Key.
        // const refreshToken = await JWT.sign(payload, privateKey, {
        //     algorithm: 'RS256',
        //     expiresIn: '7 days'
        // })

        // Access Token: Ký bằng Private Key, xác thực bằng Public Key.
        const accessToken = await JWT.sign(payload, publicKey, {
            expiresIn: '2 days'
        })
        //Refresh Token: Ký bằng Private Key, xác thực bằng Private Key.
        const refreshToken = await JWT.sign(payload, privateKey, {
            expiresIn: '7 days'
        })

        //
        JWT.verify(accessToken, publicKey, (err, decode) => {
            if (err) {
                console.log(`error verify::`, err);
            } else {
                console.log(`decode verify::`, decode);
            }
        })

        return { accessToken, refreshToken }

    } catch (error) {

    }
}

const authentication = asyncHandler(async (req, res, next) => {
    //1.check userId missing
    const userId = req.headers[HEADER.CLIENT_ID]
    if (!userId) throw new UnauthorizedError('Invalid Request - Missing Client ID')


    //2.verifyToken
    const authHeader = req.headers[HEADER.AUTHORIZATION];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedError('Invalid Request - Missing Access Token');
    }
    const accessToken = authHeader.split(' ')[1];

    //3.get accessToken
    const keyStore = await findByUserId(userId)
    if (!keyStore) throw new NotFoundError('Not Found!')

    try {
        //4.check user in dbs
        //5.check keyStore with this userId
        const decodeUser = JWT.verify(accessToken, keyStore.publicKey)
        if (userId !== decodeUser.userId) throw new UnauthorizedError('Invalid Request')
        req.keyStore = keyStore
        req.user = decodeUser
        //6.return next
        return next()

    } catch (error) {
        throw new UnauthorizedError('Invalid Access Token');
    }
})

const verifyJWT = async (token, keySecret) => {
    return JWT.verify(token, keySecret)
}

module.exports = {
    createTokenPair,
    authentication,
    verifyJWT
}