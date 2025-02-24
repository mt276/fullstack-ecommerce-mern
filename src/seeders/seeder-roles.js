"use strict";

const Constants = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        id: Constants.Role.Admin,
        value_en: "Admin",
        value_vi: "Quản trị viên",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Role.Doctor,
        value_en: "Doctor",
        value_vi: "Bác sĩ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Role.Patient,
        value_en: "Patient",
        value_vi: "Bệnh nhân",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};
