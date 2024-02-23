const mongoose = require('mongoose');

// Define the Category schema
const categorySchema = new mongoose.Schema({
  name: String,
  // Add any other fields you need for the Category entity
});

// Define the Product schema with a reference to the Category schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category' // Reference to the Category schema
  }
});

// Define the Category model
const Category = mongoose.model('Category', categorySchema);

// Define the Product model
const Product = mongoose.model('Product', productSchema);

/**
 * Retrieves all products with populated category details from MongoDB
 * @returns {Array} - Array of product objects with populated category details
 */
async function getProductsPopulatedWithCategory() {
  try {
    // Use Mongoose's populate method to populate the 'category' field
    const products = await Product.find().populate('category').exec();
    return products;
  } catch (error) {
    console.error('Error fetching products with populated category:', error);
    throw error;
  }
}
