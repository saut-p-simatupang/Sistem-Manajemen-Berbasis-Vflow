<<<<<<< HEAD
const Joi = require('joi');

const schemas = {
    'buka-keranjang': Joi.object({
        pelanggan_id: Joi.number().required(),
        kasir_id: Joi.number().required() // Berdasarkan Workflow 1 [cite: 41]
    }),
    'validasi-stok': Joi.object({
        pesanan_id: Joi.number().required(),
        produk_id: Joi.number().required(),
        jumlah: Joi.number().min(1).required() // Berdasarkan Workflow 2 [cite: 42]
    }),
    'kalkulasi-tagihan': Joi.object({
        subtotal: Joi.number().min(0).required(),
        total_item: Joi.number().min(1).required(),
        tipe_pelanggan: Joi.string().valid('reguler', 'member').required(),
        metode_pembayaran: Joi.string().required(),
        metode_pengambilan: Joi.string().required() // Berdasarkan Workflow 3 [cite: 47]
    }),
    'konfirmasi-pembayaran': Joi.object({
        pesanan_id: Joi.number().required(),
        total_tagihan: Joi.number().min(0).required(),
        nominal_dibayar: Joi.number().min(0).required() // Berdasarkan Workflow 4 [cite: 49]
    }),
    'penyelesaian-pesanan': Joi.object({
        pesanan_id: Joi.number().required() // Berdasarkan Workflow 5 [cite: 50]
    }),
    'audit-log': Joi.object({
        pesanan_id: Joi.number().required(),
        aktor_id: Joi.number().required(),
        aktivitas_tipe: Joi.string().required(),
        payload_log: Joi.object().required(),
        waktu_kejadian: Joi.string().required() // Berdasarkan Workflow 6 [cite: 51]
    })
};

module.exports = (workflowName) => {
    return (req, res, next) => {
        const schema = schemas[workflowName];
        if (!schema) return next();

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: error.details[0].message
            });
        }
        next();
    };
=======
const Joi = require('joi');

const schemas = {
    'buka-keranjang': Joi.object({
        pelanggan_id: Joi.number().required(),
        kasir_id: Joi.number().required() // Berdasarkan Workflow 1 [cite: 41]
    }),
    'validasi-stok': Joi.object({
        pesanan_id: Joi.number().required(),
        produk_id: Joi.number().required(),
        jumlah: Joi.number().min(1).required() // Berdasarkan Workflow 2 [cite: 42]
    }),
    'kalkulasi-tagihan': Joi.object({
        subtotal: Joi.number().min(0).required(),
        total_item: Joi.number().min(1).required(),
        tipe_pelanggan: Joi.string().valid('reguler', 'member').required(),
        metode_pembayaran: Joi.string().required(),
        metode_pengambilan: Joi.string().required() // Berdasarkan Workflow 3 [cite: 47]
    }),
    'konfirmasi-pembayaran': Joi.object({
        pesanan_id: Joi.number().required(),
        total_tagihan: Joi.number().min(0).required(),
        nominal_dibayar: Joi.number().min(0).required() // Berdasarkan Workflow 4 [cite: 49]
    }),
    'penyelesaian-pesanan': Joi.object({
        pesanan_id: Joi.number().required() // Berdasarkan Workflow 5 [cite: 50]
    }),
    'audit-log': Joi.object({
        pesanan_id: Joi.number().required(),
        aktor_id: Joi.number().required(),
        aktivitas_tipe: Joi.string().required(),
        payload_log: Joi.object().required(),
        waktu_kejadian: Joi.string().required() // Berdasarkan Workflow 6 [cite: 51]
    })
};

module.exports = (workflowName) => {
    return (req, res, next) => {
        const schema = schemas[workflowName];
        if (!schema) return next();

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: 'error',
                code: 400,
                message: error.details[0].message
            });
        }
        next();
    };
>>>>>>> 79a2c4081b76828a9835b0c47124c1463a408645
};