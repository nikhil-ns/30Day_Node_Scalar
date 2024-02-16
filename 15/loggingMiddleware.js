/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    // Log timestamp
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}]`);
  
    // Log HTTP method and URL
    console.log(`${req.method} ${req.url}`);
  
    // Log request headers
    console.log("Headers:");
    Object.keys(req.headers).forEach((header) => {
      console.log(`  ${header}: ${req.headers[header]}`);
    });
  
    // Log request body if exists
    if (req.body && Object.keys(req.body).length > 0) {
      console.log("Body:");
      console.log(req.body);
    }
  
    // Continue to the next middleware
    next();
  }
  
  module.exports = loggingMiddleware;
  