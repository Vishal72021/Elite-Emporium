import Order from "../models/Order.js";

function checkOrderOwnership(req, res, next) {
  const orderId = req.params.orderId;
  const userId = req.user.id;

  Order.findById(orderId)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ message: "Order not found." });
      }

      if (order.user.toString() !== userId) {
        return res
          .status(403)
          .json({ message: "You are not authorized to modify this order." });
      }

      next();
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "An error occurred while checking order ownership." });
    });
}

export default checkOrderOwnership;
