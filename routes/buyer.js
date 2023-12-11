const express = require('express');
const { getAllSeller, getCatalogOfSeller, createOrder } = require('../controllers/buyer');

const router = express.Router();

router.route('/list-of-sellers').get(getAllSeller)
router.route('/seller-catalog/:seller_id').get(getCatalogOfSeller)
router.route('/create-order/:seller_id').post(createOrder)

module.exports = router;