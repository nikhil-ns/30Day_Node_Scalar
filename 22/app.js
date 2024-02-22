const express = require('express');
const bodyParser = require('body-parser');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('./productController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Create a new product
app.post('/products', async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Update a product
app.put('/products/:id', async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  try {
    const product = await updateProduct(productId, updatedProduct);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete a product
app.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    await deleteProduct(productId);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
