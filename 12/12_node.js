/*
12. Problem: Express Rate Limiting
Problem Statement: Implement a rate-limiting middleware for an Express application. 
The middleware should limit the number of requests 
from a single IP address to a specified rate, and 
return a 429 Too Many Requests status if the limit is exceeded.
*/
const express = require('express');
const app = express();

const RATE_LIMIT_WINDOW_MS = 60000; 
const MAX_REQUESTS_PER_WINDOW = 100;

const requestCounts = new Map();

function rateLimitMiddleware(req, res, next) {
    const ip = req.ip; 
    const currentTime = Date.now();
    const requests = requestCounts.get(ip) || [];

    const validRequests = requests.filter(time => currentTime - time <= RATE_LIMIT_WINDOW_MS);

    if (validRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ error: 'Too Many Requests' });
    }

    requestCounts.set(ip, [...validRequests, currentTime]);

    next();
}

app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
