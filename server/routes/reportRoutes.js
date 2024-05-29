const express = require('express');
const router = express.Router();
const { getHistoryReport } = require('../controllers/reportController');


router.get('/history', getHistoryReport);

module.exports = router;
