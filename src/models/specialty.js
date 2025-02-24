"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Specialty.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      image: { type: DataTypes.STRING },
    },
    {
      sequelize,
      allCode: "Specialty",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4();
        },
      },
    }
  );

  return Specialty;
};
