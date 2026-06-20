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
};