const express = require('express');
const addProduct = require('../controllers/product');
const router = express.Router();

router.route('/create-catalog').post(addProduct)

module.exports = router;