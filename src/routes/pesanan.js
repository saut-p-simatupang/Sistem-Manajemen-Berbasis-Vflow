const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
console.log("=== DEBUG PESANAN ===");
console.log("auth:", typeof auth);
console.log("validate:", typeof validate);
console.log("=====================");
const forwardToVFlow = (path) => async (req, res, next) => {
    try {
        const response = await axios.post(`${process.env.VFLOW_HOST}${path}`, req.body);
        res.status(200).json(response.data);
    } catch (error) {
        next(error);
    }
};

// Routing 6 Workflow dengan urutan Middleware: Auth -> Validate Joi -> Forward Axios
router.post('/buka-keranjang', auth, validate('buka-keranjang'), forwardToVFlow('/webhook/w1-buka-keranjang'));
router.post('/validasi-stok', auth, validate('validasi-stok'), forwardToVFlow('/webhook/w2-validasi-stok'));
router.post('/kalkulasi-tagihan', auth, validate('kalkulasi-tagihan'), forwardToVFlow('/webhook/w3-kalkulasi-tagihan'));
router.post('/konfirmasi-pembayaran', auth, validate('konfirmasi-pembayaran'), forwardToVFlow('/webhook/w4-konfirmasi-pembayaran'));
router.post('/penyelesaian-pesanan', auth, validate('penyelesaian-pesanan'), forwardToVFlow('/webhook/w5-penyelesaian-pesanan'));
<<<<<<< HEAD
=======
router.post('/audit-log', auth, validate('audit-log'), forwardToVFlow('/webhook/w6-audit-log'));
>>>>>>> 32db6d164bb00fd3bf79f89469cd533a9191b245

module.exports = router;