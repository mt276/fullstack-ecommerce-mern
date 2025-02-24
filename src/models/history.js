"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  History.init(
    {
      patientId: { type: DataTypes.UUID },
      doctorId: { type: DataTypes.UUID },
      description: { type: DataTypes.TEXT },
      files: { type: DataTypes.TEXT },
    },
    { sequelize, allCode: "History" }
  );

  return History;
};
