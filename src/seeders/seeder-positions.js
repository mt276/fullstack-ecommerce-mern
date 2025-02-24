"use strict";

const Constants = require("../utils/constants");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Positions", [
      {
        id: Constants.Position.None,
        value_en: "None",
        value_vi: "Bác sĩ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Position.Master,
        value_en: "Master",
        value_vi: "Thạc sĩ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Position.Doctor,
        value_en: "Doctor",
        value_vi: "Tiến sĩ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Position.Associate_Professor,
        value_en: "Associate Professor",
        value_vi: "Phó giáo sư",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Constants.Position.Professor,
        value_en: "Professor",
        value_vi: "Giáo sư",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Positions", null, {});
  },
};
