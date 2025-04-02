'use strict'

const { inventory } = require("../models/inventory.model")
const redis = require('redis')
const { promisify } = require('util')
const { reservationInventory } = require('../models/repositories/inventory.repo')
const redisClient = redis.createClient()

const pExpire = promisify(redisClient.pExpire).bind(redisClient)
const setNXAsync = promisify(redisClient.setNX).bind(redisClient)

const acquireLock = async (productId, quantity, cartId) => {
    const key = `lock_v2025_${productId}`
    const retryTimes = 10
    const expireTime = 3000 //3 seconds tạm lock

    for (let i = 0; i < retryTimes.length; i++) {
        const result = await setNXAsync(key, expireTime)
        if (result === 1) {
            //thao tac voi inventory
            const isReservation = await reservationInventory({
                productId, quantity, cartId, model: inventory
            })
            if (isReservation.modifiedCount) {
                await pExpire(key, expireTime)
                return key
            }
            return null
        } else {
            await new Promise((resolve) => setTimeout(resolve, 50))
        }
    }
}

const releaseLock = async keyLock => {
    const delAsyncKey = promisify(redisClient.del).bind(redisClient)
    return await delAsyncKey(keyLock)
}

module.exports = {
    acquireLock,
    releaseLock
}