"use strict";

const CONSTANTS = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Status", [
      {
        id: CONSTANTS.STATUS.NEW,
        value_en: "New",
        value_vi: "Lịch hẹn mới",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.STATUS.CONFIRMED,
        value_en: "Confirmed",
        value_vi: "Đã xác nhận",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.STATUS.DONE,
        value_en: "Done",
        value_vi: "Đã khám xong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: CONSTANTS.STATUS.CANCEL,
        value_en: "Cancel",
        value_vi: "Đã hủy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Status", null, {});
  },
};
