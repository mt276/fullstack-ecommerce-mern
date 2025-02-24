"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      statusId: { type: DataTypes.UUID },
      doctorId: { type: DataTypes.UUID },
      patientId: { type: DataTypes.UUID },
      date: { type: DataTypes.DATE },
      timeTypeId: { type: DataTypes.UUID },
    },
    {
      sequelize,
      allCode: "Booking",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4();
        },
      },
    }
  );

  return Booking;
};
