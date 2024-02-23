const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define schemas and models as before
const categorySchema = new mongoose.Schema({
  name: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);

// Express app
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Route to get products with populated category details
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category').exec();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products with populated category:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
