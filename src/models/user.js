"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      phoneNumber: { type: DataTypes.STRING },
      gender: { type: DataTypes.BOOLEAN },
      roleId: { type: DataTypes.UUID },
    },
    { sequelize, modelName: "User" }
  );

  return User;
};
