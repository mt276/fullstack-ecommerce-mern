import userService from "../services/user-service";
import CONSTANTS from "../utils/constants";

const getAllUsers = async (req, res) => {
  try {
    const { users, roles } = await userService.getAllUsers();
    return res.status(200).json({ users, roles });
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi lấy danh sách người dùng" });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi xóa người dùng" });
  }
};

const getCreateUser = (req, res) => {
  try {
    return res.render(`users/create-user.ejs`, { CONSTANTS });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Lỗi không tìm thấy trang tạo người dùng" });
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

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const message = await userService.updateUser(req.body, userId);
    return res.status(201).json({ message });
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi sửa thông tin người dùng" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const message = await userService.deleteUser(userId);
    return res.status(204).json({ message });
  } catch (error) {
    return res.status(500).json({ error: "Lỗi khi sửa thông tin người dùng" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  getCreateUser,
  updateUser,
  deleteUser,
};
