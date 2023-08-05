import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import logger from "./middlewares/logger.js";
import authenticateUser from "./middlewares/authenticateUser.js";
import {
  validateUserInput,
  validateProductInput,
} from "./middlewares/validate.js";
import errorHandler from "./middlewares/error.js";
import connectToMongo from "./db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Database connection
connectToMongo();

// Add the middlewares
app.use(logger);
app.use(express.json());

// Routes
app.use("/api/users", validateUserInput, userRoutes);
app.use("/api/products", validateProductInput, productRoutes);
app.use("/api/orders", authenticateUser, orderRoutes);

// Add error handling middleware
app.use(errorHandler);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the e-commerce website!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
