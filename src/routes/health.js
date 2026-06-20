<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        await axios.get(`${process.env.VFLOW_HOST}/health`, { timeout: 3000 });
        res.status(200).json({ status: 'OK', vflow_connection: 'connected' });
    } catch (error) {
        res.status(200).json({ status: 'DEGRADED', vflow_connection: 'disconnected' });
    }
});

=======
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        await axios.get(`${process.env.VFLOW_HOST}/health`, { timeout: 3000 });
        res.status(200).json({ status: 'OK', vflow_connection: 'connected' });
    } catch (error) {
        res.status(200).json({ status: 'DEGRADED', vflow_connection: 'disconnected' });
    }
});

>>>>>>> 79a2c4081b76828a9835b0c47124c1463a408645
module.exports = router;