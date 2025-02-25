"use strict";

const CONSTANTS = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("TimeTypes", [
      {
        id: CONSTANTS.TIME_TYPE.T1_08_09,
        value_en: "08:00 AM - 09:00 AM",
        value_vi: "08:00 - 09:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T2_09_10,
        value_en: "09:00 AM - 10:00 AM",
        value_vi: "09:00 - 10:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T3_10_11,
        value_en: "10:00 AM - 11:00 AM",
        value_vi: "10:00 - 11:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T4_11_12,
        value_en: "11:00 AM - 00:00 PM",
        value_vi: "11:00 - 12:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T5_13_14,
        value_en: "01:00 PM - 02:00 PM",
        value_vi: "13:00 - 14:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T6_14_15,
        value_en: "02:00 PM - 03:00 PM",
        value_vi: "14:00 - 15:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T7_15_16,
        value_en: "03:00 PM - 04:00 PM",
        value_vi: "15:00 - 16:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.TIME_TYPE.T8_16_17,
        value_en: "04:00 PM - 05:00 PM",
        value_vi: "16:00 - 17:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("TimeTypes", null, {});
  },
};
