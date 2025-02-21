"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AllCode.init(
    {
      key: { type: DataTypes.STRING },
      type: { type: DataTypes.STRING },
      value_en: { type: DataTypes.STRING },
      value_vi: { type: DataTypes.STRING },
    },
    { sequelize, allCode: "AllCode" }
  );

  return AllCode;
};
