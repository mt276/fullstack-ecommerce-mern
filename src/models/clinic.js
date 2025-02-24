"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      name: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      description: { type: DataTypes.TEXT },
      image: { type: DataTypes.STRING },
    },
    { sequelize, allCode: "Clinic" }
  );

  return Clinic;
};
