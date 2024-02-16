const express = require('express');
const bodyParser = require('body-parser');
const loggingMiddleware = require('./loggingMiddleware');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Custom logging middleware
app.use(loggingMiddleware);

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
