import jwt from "jsonwebtoken";

function authenticateUser(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing." });
  }

  try {
    const key = process.env.SECRET_KEY;
    const decodedToken = jwt.verify(token, key);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid authentication token." });
  }
}

export default authenticateUser;
