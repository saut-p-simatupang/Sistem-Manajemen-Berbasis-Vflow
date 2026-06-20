<<<<<<< HEAD
module.exports = (err, req, res, next) => {
    console.error(`[INTERNAL ERROR]:`, err.message); // Log aman di sisi server

    const statusCode = err.response ? err.response.status : (err.statusCode || 500);
    const message = err.response ? err.response.data.message : (err.message || 'Internal Server Error');

    res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: message
    });
=======
module.exports = (err, req, res, next) => {
    console.error(`[INTERNAL ERROR]:`, err.message); // Log aman di sisi server

    const statusCode = err.response ? err.response.status : (err.statusCode || 500);
    const message = err.response ? err.response.data.message : (err.message || 'Internal Server Error');

    res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: message
    });
>>>>>>> 79a2c4081b76828a9835b0c47124c1463a408645
};