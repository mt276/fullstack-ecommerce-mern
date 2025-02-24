"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      entNumber: { type: DataTypes.INTEGER },
      maxNumber: { type: DataTypes.INTEGER },
      date: { type: DataTypes.DATE },
      timeTypeId: { type: DataTypes.UUID },
      doctorId: { type: DataTypes.UUID },
    },
    {
      sequelize,
      modelName: "Schedule",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4();
        },
      },
    }
  );

  return Schedule;
};
