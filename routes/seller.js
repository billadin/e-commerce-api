const express = require('express');
const { addProduct, getASllOrders } = require('../controllers/seller');
const router = express.Router();

router.route('/create-catalog').post(addProduct)
router.route('/orders').get(getASllOrders)

module.exports = router;