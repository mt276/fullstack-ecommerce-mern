'use strict'

const pick = require('lodash/pick');

const getIntoData = ({ fields = [], object = {} }) => {
    return pick(object, fields)
}

module.exports = {
    getIntoData
}