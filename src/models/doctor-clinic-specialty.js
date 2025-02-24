"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
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
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      doctorId: { type: DataTypes.UUID },
      clinicId: { type: DataTypes.UUID },
      specialtyId: { type: DataTypes.UUID },
    },
    {
      sequelize,
      allCode: "Doctor_Clinic_Specialty",
      hooks: {
        beforeCreate: (user) => {
          user.id = uuidv4();
        },
      },
    }
  );

  return Doctor_Clinic_Specialty;
};
