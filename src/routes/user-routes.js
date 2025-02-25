import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/create", userController.getCreateUser);
router.post("/create", userController.createUser);

module.exports = router;
