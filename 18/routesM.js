const express = require('express');
const User = require('../models/User'); // Assuming User model is defined

const router = express.Router();

/**
 * Express route to get all users from MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/users', async (req, res) => {
  try {
    // Find all users in the database
    const users = await User.find();

    // Send the users as a JSON response
    res.json(users);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
