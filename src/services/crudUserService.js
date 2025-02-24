import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);
const { v4: uuidv4 } = require("uuid");

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (err) {
      reject(err);
    }
  });
};

let createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        //id: uuidv4(),
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      });
      resolve(`ok create a new user success`);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createUser: createUser,
};
