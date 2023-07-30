import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

function authenticateUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing." });
  }

  try {
    const key = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, key); // Replace 'your_secret_key' with your JWT secret key
    req.user = decodedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid authentication token." });
  }
}

export default authenticateUser;
