'use strict'

const JWT = require('jsonwebtoken')

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

module.exports = {
    createTokenPair
}