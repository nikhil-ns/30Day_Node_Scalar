const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/usersRouter');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mount the usersRouter to the '/api' route
app.use('/api', usersRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
