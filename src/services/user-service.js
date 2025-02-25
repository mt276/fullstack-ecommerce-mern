import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = async (password) => {
  try {
    return await bcrypt.hash(password, salt);
  } catch (err) {
    throw err;
  }
};

const getAllUsers = async () => {
  return await db.User.findAll();
};

const createUser = async (data) => {
  try {
    const hashPasswordFromBcrypt = await hashUserPassword(data.password);
    await db.User.create({
      email: data.email,
      password: hashPasswordFromBcrypt,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phoneNumber: data.phoneNumber,
      gender: data.gender === 1,
      roleId: data.roleId,
    });
    return "OK, created a new user successfully";
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllUsers, createUser };
