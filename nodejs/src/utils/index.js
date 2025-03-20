'use strict'

const pick = require('lodash/pick');

const getIntoData = ({ fields = [], object = {} }) => {
    return pick(object, fields)
}

// ['a','b'] = {a:1, b:1}
const getSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 1]))
}

// ['a','b'] = {a:0, b:0}
const unGetSelectData = (select = []) => {
    return Object.fromEntries(select.map(el => [el, 0]))
}

module.exports = {
    getIntoData,
    getSelectData,
    unGetSelectData
}