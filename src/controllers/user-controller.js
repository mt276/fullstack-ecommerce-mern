import * as userService from "../services/user-service";
import CONSTANTS from "../utils/constants";

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi lấy danh sách người dùng" });
  }
};

const createUser = async (req, res) => {
  try {
    const message = await userService.createUser(req.body);
    return res.status(201).json({ message });
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi tạo người dùng" });
  }
};

const getCreateUser = (req, res) => {
  try {
    return res.render(`create-user.ejs`, { CONSTANTS });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, createUser, getCreateUser };
