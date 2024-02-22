const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

// Create a Mongoose model
const Product = mongoose.model('Product', productSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/productsDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

/**
 * Creates a new product in MongoDB
 * @param {Object} product - Product object with properties name, price, and quantity
 * @returns {Promise<Object>} - Created product object
 */
async function createProduct(product) {
  try {
    const newProduct = await Product.create(product);
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
}

/**
 * Retrieves all products from MongoDB
 * @returns {Promise<Array>} - Array of product objects
 */
async function getAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.error('Error getting products:', error);
    throw error;
  }
}

/**
 * Updates a product in MongoDB
 * @param {string} productId - ID of the product to update
 * @param {Object} updatedProduct - Updated product object
 * @returns {Promise<Object>} - Updated product object
 */
async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, { new: true });
    return product;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
}

/**
 * Deletes a product from MongoDB
 * @param {string} productId - ID of the product to delete
 */
async function deleteProduct(productId) {
  try {
    await Product.findByIdAndDelete(productId);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
}

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
