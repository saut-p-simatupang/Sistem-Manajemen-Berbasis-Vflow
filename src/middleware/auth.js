<<<<<<< HEAD
module.exports = (req, res, next) => {
    const apiKey = req.header('X-API-Key');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            status: 'error',
            code: 401,
            message: 'Unauthorized: Invalid or missing X-API-Key'
        });
    }
    next();
=======
module.exports = (req, res, next) => {
    const apiKey = req.header('X-API-Key');
    if (!apiKey || apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            status: 'error',
            code: 401,
            message: 'Unauthorized: Invalid or missing X-API-Key'
        });
    }
    next();
>>>>>>> 79a2c4081b76828a9835b0c47124c1463a408645
};