require('dotenv').config();
const express = require('express');
const cors = require('cors');

const rateLimitMiddleware = require('./middleware/rateLimit');
const errorHandler = require('./middleware/errorHandler');
const healthRoute = require('./routes/health');
const pesananRoute = require('./routes/pesanan');
console.log("=== DEBUG SERVER ===");
console.log("rateLimitMiddleware:", typeof rateLimitMiddleware);
console.log("errorHandler:", typeof errorHandler);
console.log("healthRoute:", typeof healthRoute);
console.log("pesananRoute:", typeof pesananRoute);
console.log("====================");
const app = express();

app.use(express.json());
app.use(cors());

// Gunakan Rate Limiter untuk semua API request
app.use('/api/', rateLimitMiddleware);

// Registrasi Route
app.use('/health', healthRoute);
app.use('/api/pesanan', pesananRoute);

// Error Handler selalu di posisi terbawah
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Backend Kelompok 3 berjalan di Port ${PORT}`);
});