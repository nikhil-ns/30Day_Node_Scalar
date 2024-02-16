const mongoose = require('mongoose');

/**
 * Establishes a connection to MongoDB using Mongoose
 */
async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database_name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

module.exports = connectToMongoDB;
