import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

// User registration
router.post("/register", UserController.registerUser);

// User login
router.post("/login", UserController.loginUser);

// Get user profile
router.get("/profile/:userId", UserController.getUserProfile);

// Update user profile
router.put("/profile/:userId", UserController.updateUserProfile);

export default router;
