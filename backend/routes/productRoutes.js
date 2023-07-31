import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", ProductController.getAllProducts);

// Create a new product
router.post("/", ProductController.createProduct);

// Get a single product by ID
router.get("/:productId", ProductController.getProductById);

// Update a product by ID
router.put("/:productId", ProductController.updateProductById);

// Delete a product by ID
router.delete("/:productId", ProductController.deleteProductById);

export default router;
