import express from "express";
import UserController from "../controllers/userController.js";
import AuthenticateUser from "../middlewares/authenticateUser.js";

const router = express.Router();

// User registration
router.post("/register", UserController.registerUser);

// User login
router.post("/login", UserController.loginUser);

// Get user profile
router.get("/profile/:userId", AuthenticateUser, UserController.getUserProfile);

// Update user profile
router.put(
  "/profile/:userId",
  AuthenticateUser,
  UserController.updateUserProfile
);

export default router;
