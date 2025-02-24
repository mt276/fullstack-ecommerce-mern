"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
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
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      phoneNumber: { type: DataTypes.STRING },
      gender: { type: DataTypes.BOOLEAN },
      image: { type: DataTypes.STRING },
      roleId: { type: DataTypes.UUID },
      positionId: { type: DataTypes.UUID },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4(); // Gán UUID trước khi tạo bản ghi mới
        },
      },
    }
  );

  return User;
};
