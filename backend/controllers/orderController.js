import Order from "../models/Order.js";

// Create a new order
async function createOrder(req, res) {
  try {
    const {
      user,
      products,
      totalAmount,
      shippingAddress,
      paymentStatus,
      orderStatus,
    } = req.body;

    // Create a new order object
    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
      paymentStatus,
      orderStatus,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while creating the order." });
  }
}

// Get all orders
async function getAllOrders(req, res) {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching all orders." });
  }
}

// Get an order by ID
async function getOrderById(req, res) {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.status(200).json(order);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the order." });
  }
}

// Update an order by ID
async function updateOrderById(req, res) {
  try {
    const orderId = req.params.orderId;
    const { totalAmount, shippingAddress, paymentStatus, orderStatus } =
      req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { totalAmount, shippingAddress, paymentStatus, orderStatus },
      { new: true } // Return the updated order object
    );
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the order." });
  }
}

// Delete an order by ID
async function deleteOrderById(req, res) {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found." });
    }
    res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the order." });
  }
}

const orderController = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
};

export default orderController;
