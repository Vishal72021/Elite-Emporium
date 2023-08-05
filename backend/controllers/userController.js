import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Helper function to generate a JWT token
function generateAuthToken(user) {
  const key = process.env.SECRET_KEY;
  const payload = {
    user: {
      id: user.id,
    },
  };
  return jwt.sign(payload, key, { expiresIn: "1h" });
}

// Register a new user
async function registerUser(req, res) {
  try {
    const { username, email, password, shippingAddress, paymentInfo } =
      req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email." });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      shippingAddress,
      paymentInfo,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Generate and send a JWT token as a response
    const token = generateAuthToken(savedUser);
    res.status(201).json({ token, user: savedUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while registering the user." });
  }
}

// Login an existing user
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Generate and send a JWT token as a response
    const token = generateAuthToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while logging in." });
  }
}

// Get user profile
async function getUserProfile(req, res) {
  try {
    const userId = req.params.userId;

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the user profile." });
  }
}

// Update user profile
async function updateUserProfile(req, res) {
  try {
    const userId = req.params.userId;
    const { username, email, shippingAddress, paymentInfo } = req.body;

    // Find the user by ID and update the fields
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email, shippingAddress, paymentInfo },
      { new: true } // Return the updated user object
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the user profile." });
  }
}

const userController = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
};

export default userController;
