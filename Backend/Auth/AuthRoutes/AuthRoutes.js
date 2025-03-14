import express from "express";
import {
  loginController,
  logoutController,
  registerController,
  getController
} from "../Authcontroller/AuthController.js";

const authRoutes = express.Router();

authRoutes.get("/get", getController);

authRoutes.post("/register", registerController);

authRoutes.post("/login", loginController);

authRoutes.post("/logout", logoutController);

export default authRoutes;