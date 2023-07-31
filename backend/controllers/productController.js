import Product from "../models/Product.js";

// Create a new product
async function createProduct(req, res) {
  try {
    const { name, description, price, category, images, stockQuantity } =
      req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      images,
      stockQuantity,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while creating the product." });
  }
}

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching all products." });
  }
}

// Get a single product by ID
async function getProductById(req, res) {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while fetching the product." });
  }
}

// Update a product by ID
async function updateProductById(req, res) {
  try {
    const productId = req.params.productId;
    const { name, description, price, category, images, stockQuantity } =
      req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, category, images, stockQuantity },
      { new: true } // Return the updated product object
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while updating the product." });
  }
}

// Delete a product by ID
async function deleteProductById(req, res) {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    res.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while deleting the product." });
  }
}

const productController = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};

export default productController;
