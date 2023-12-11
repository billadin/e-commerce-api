const express = require('express');
const getAllSeller = require('../controllers/buyer');
const router = express.Router();

router.route('/list-of-sellers').get(getAllSeller)

module.exports = router;