/*
11. Problem: Express Authentication Middleware

Problem Statement: Implement an authentication middleware for an Express application. 
The middleware should check for the presence of a valid JWT (JSON Web Token) 
in the request headers. If a valid token is present, allow the request to proceed; 
otherwise, return a 401 Unauthorized status.
*/
const express = require('express');
const authenticateToken = require('./authMiddleware');

const app = express();

app.use(express.json());

app.get('/protected-route', authenticateToken, (req, res) => {
  // The user is authenticated, you can access req.user here
  res.json({ message: 'You accessed the protected route!' });
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
