<<<<<<< HEAD
const rateLimitPackage = require('express-rate-limit');
// Trik agar otomatis ngebaca function dari versi lama maupun baru
const rateLimit = rateLimitPackage.rateLimit || rateLimitPackage;

module.exports = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100, // Limit 100 request
    message: { status: 'error', code: 429, message: 'Terlalu banyak request, coba lagi nanti' }
=======
const rateLimitPackage = require('express-rate-limit');
// Trik agar otomatis ngebaca function dari versi lama maupun baru
const rateLimit = rateLimitPackage.rateLimit || rateLimitPackage;

module.exports = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100, // Limit 100 request
    message: { status: 'error', code: 429, message: 'Terlalu banyak request, coba lagi nanti' }
>>>>>>> 79a2c4081b76828a9835b0c47124c1463a408645
});