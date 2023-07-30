import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/products", ProductController.getAllProducts);

// Get a single product by ID
router.get("/products/:productId", ProductController.getProductById);

// Create a new product
router.post("/products", ProductController.createProduct);

// Update a product by ID
router.put("/products/:productId", ProductController.updateProductById);

// Delete a product by ID
router.delete("/products/:productId", ProductController.deleteProductById);

export default router;
