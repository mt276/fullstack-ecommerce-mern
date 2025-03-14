'use strict'

const mongoose = require('mongoose')
const { countConnect } = require('../helpers/check.connect')

const { db: { host, port, name } } = require('../configs/config.mongodb')
const connectionString = `mongodb://${host}:${port}/${name}`

class Database {
    constructor() {
        this.connect()
    }

    //connect
    connect(type = 'mongodb') {
        //dev
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectionString,
            { serverSelectionTimeoutMS: 3000, maxPoolSize: 100 })
            .then(result => console.log(`Database connection Success!`, countConnect()))
            .catch(err => console.error(`Database connection Failed!`, err))

        mongoose.connection.on('connected', () => {
            console.log(`Mongodb connected to db!`)
        })

        mongoose.connection.on('error', (error) => {
            console.log(error.message)
        })

        mongoose.connection.on('disconnected', () => {
            console.log(`Mongodb connected is disconnected!`)
        })
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance
    }
}


const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb