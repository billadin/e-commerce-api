const express = require('express');
const addProduct = require('../controllers/seller');
const router = express.Router();

router.route('/create-catalog').post(addProduct)

module.exports = router;