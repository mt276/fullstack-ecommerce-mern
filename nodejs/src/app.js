const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')
const { v4: uuid } = require('uuid')

const app = express();

//init middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//init database
require('./dbs/init.mongodb');

//init routes
app.use('/', require('./routes/index'))

//handling error


module.exports = app