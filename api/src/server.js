import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user-routes.js";
import connectDB from "./config/connectDB";

dotenv.config();

let app = express();
let PORT = process.env.PORT || 6969;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kết nối Database
connectDB();

// Routes
app.use("/api/user", userRoutes);

//Khởi động Server
app.listen(PORT, () => {
  console.log("Backend NodeJS is running on the port: ", PORT);
});
