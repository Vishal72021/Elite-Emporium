import express from "express";
import OrderController from "../controllers/orderController.js";
import AuthenticateUser from "../middleware/authenticateUser.js";
import checkOrderOwnership from "../middleware/authorization.js";

const router = express.Router();

// Get all orders
router.get("/", OrderController.getAllOrders);

// Create a new order
router.post("/", OrderController.createOrder);

// Get an order by ID
router.get(
  "/:orderId",
  AuthenticateUser,
  checkOrderOwnership,
  OrderController.getOrderById
);

// Update an order by ID
router.put(
  "/:orderId",
  AuthenticateUser,
  checkOrderOwnership,
  OrderController.updateOrderById
);

// Delete an order by ID
router.delete(
  "/:orderId",
  AuthenticateUser,
  checkOrderOwnership,
  OrderController.deleteOrderById
);

export default router;
