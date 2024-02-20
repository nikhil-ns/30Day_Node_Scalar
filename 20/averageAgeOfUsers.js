const User = require('./models/User'); // Assuming you have a User model

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
async function averageAgeOfUsers(req, res) {
  try {
    const aggregationPipeline = [
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" } // Assuming the field storing age is named "age"
        }
      }
    ];

    const result = await User.aggregate(aggregationPipeline);

    if (result.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    const averageAge = result[0].averageAge;
    return res.status(200).json({ averageAge });
  } catch (error) {
    console.error("Error calculating average age:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = averageAgeOfUsers;
