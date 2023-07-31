function validateUserInput(req, res, next) {
  const { username, email, password, shippingAddress, paymentInfo } = req.body;
  if (!username || !email || !password || !shippingAddress || !paymentInfo) {
    return res
      .status(400)
      .json({ message: "Missing required user information." });
  }
  next();
}

function validateProductInput(req, res, next) {
  const { name, description, price, category, images, stockQuantity } =
    req.body;
  if (
    !name ||
    !description ||
    !price ||
    !category ||
    !images ||
    !stockQuantity
  ) {
    return res
      .status(400)
      .json({ message: "Missing required product information." });
  }
  next();
}

export {validateUserInput, validateProductInput}