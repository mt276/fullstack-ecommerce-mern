"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor_Clinic_Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor_Clinic_Specialty.init(
    {
      doctorId: { type: DataTypes.UUID },
      clinicId: { type: DataTypes.UUID },
      specialtyId: { type: DataTypes.UUID },
    },
    { sequelize, allCode: "Doctor_Clinic_Specialty" }
  );

  return Doctor_Clinic_Specialty;
};
