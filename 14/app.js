const express = require('express');
const { cachingMiddleware, cacheResponse } = require('./cachingMiddleware'); 

const app = express();

app.use(cachingMiddleware);

app.get('/example', (req, res) => {
  const responseData = { data: 'example' };
  cacheResponse(req.originalUrl, responseData, 60000);
  res.json(responseData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
