import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = async (password) => {
  try {
    return await bcrypt.hash(password, salt);
  } catch (e) {
    console.log(e);
  }
};

const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll();
      const roles = await db.Role.findAll();
      const roleMap = {};
      roles.forEach((role) => {
        roleMap[role.id] = role.value_en;
      });
      resolve({ users, roles: roleMap });
    } catch (e) {
      reject(e);
    }
  });
};

const getUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { id: userId } });
      if (!user) {
        reject(`Không tìm thấy người dùng`);
      }
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

const createUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      });
      resolve(`create success`);
    } catch (e) {
      reject(e);
    }
  });
};

const updateUser = (data, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getUserById(userId);
      await user.update({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender === 1 ? true : false,
        roleId: data.roleId,
      });

      await user.save();
      resolve(user);
    } catch (e) {
      reject(e);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await getUserById(userId);
      await user.destroy();
      resolve(`xóa người dùng thành công`);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
