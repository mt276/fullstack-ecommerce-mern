"use strict";

const Constants = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Status", [
      {
        id: Constants.Status.New,
        value_en: "New",
        value_vi: "Lịch hẹn mới",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Status.Confirmed,
        value_en: "Confirmed",
        value_vi: "Đã xác nhận",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Status.Done,
        value_en: "Done",
        value_vi: "Đã khám xong",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Status.Cancel,
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
