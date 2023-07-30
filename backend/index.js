import express from "express";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import logger from "./middleware/logger.js";
import authenticateUser from "./middleware/authenticateUser.js";
import errorHandler from "./middleware/error.js";
import connectToMongo from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
connectToMongo();

// Add the middlewares
app.use(logger); // Log incoming requests
app.use(express.json()); // Parse JSON request bodies
app.use(authenticateUser); // Authenticate users based on JWT token

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Add error handling middleware
app.use(errorHandler);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce website!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
