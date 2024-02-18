const User = require('../models/User'); // Assuming User model is defined

/**
 * Express route to get all users from MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function getAllUsers(req, res) {
  try {
    // Find all users in the database
    const users = await User.find();

    // Send the users as a JSON response
    res.json(users);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
}
