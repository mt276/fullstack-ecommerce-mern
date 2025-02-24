"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Position.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      value_en: { type: DataTypes.STRING },
      value_vi: { type: DataTypes.STRING },
    },
    {
      sequelize,
      Position: "Position",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4();
        },
      },
    }
  );

  return Position;
};
