import express from "express";
import OrderController from "../controllers/orderController.js";

const router = express.Router();

// Create a new order
router.post("/orders", OrderController.createOrder);

// Get all orders
router.get("/orders", OrderController.getAllOrders);

// Get an order by ID
router.get("/orders/:orderId", OrderController.getOrderById);

// Update an order by ID
router.put("/orders/:orderId", OrderController.updateOrderById);

// Delete an order by ID
router.delete("/orders/:orderId", OrderController.deleteOrderById);

export default router;
