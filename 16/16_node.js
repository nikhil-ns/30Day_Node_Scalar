const express = require('express');
const connectToMongoDB = require('./connectToMongoDB');

const app = express();


app.get('/connect-mongodb', async (req, res) => {
  try {
    await connectToMongoDB();
    res.send('Successfully connected to MongoDB');
  } catch (error) {
    res.status(500).send('Error connecting to MongoDB: ' + error.message);
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
