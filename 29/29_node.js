function errorHandler(err, req, res, next) {
    console.error(err);

    let statusCode = 500;
    let errorMessage = 'Internal Server Error';

    if (err instanceof CustomError) {
        statusCode = err.statusCode;
        errorMessage = err.message;
    } else if (err.name === 'ValidationError') {
        statusCode = 400;
        errorMessage = err.message;
    }

    res.status(statusCode).json({ error: errorMessage });
}

class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Example usage of the custom error
// In your route handler or middleware, throw a CustomError when needed
// For example:
// if (someCondition) {
//     throw new CustomError(400, 'Bad Request');
// }

module.exports = { errorHandler, CustomError };
