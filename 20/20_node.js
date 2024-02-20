const express = require('express');
const averageAgeOfUsers = require('./averageAgeOfUsers');

const app = express();

// Define route
app.get('/average-age', averageAgeOfUsers);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
