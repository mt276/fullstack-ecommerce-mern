"use strict";

const { v4: uuidv4 } = require("uuid");
const CONSTANTS = require("../utils/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        id: uuidv4(),
        email: "admin@gmail.com",
        password: "123456",
        firstName: "Trieu",
        lastName: "Minh",
        address: "Quận 12, Hồ Chí Minh",
        phoneNumber: "0338847740",
        gender: 1,
        image: "",
        roleId: CONSTANTS.ROLE.ADMIN,
        positionId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: "doctor@gmail.com",
        password: "123456",
        firstName: "Anh",
        lastName: "Kim",
        address: "Gò Vấp, Hồ Chí Minh",
        phoneNumber: "0123456789",
        gender: 0,
        image: "",
        roleId: CONSTANTS.ROLE.DOCTOR,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        email: "patient@gmail.com",
        password: "123456",
        firstName: "Thin",
        lastName: "Van",
        address: "Bình Thạnh, Hồ Chí Minh",
        phoneNumber: "0123456780",
        gender: 1,
        image: "",
        roleId: CONSTANTS.ROLE.PATIENT,
        positionId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
