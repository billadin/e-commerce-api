const express = require('express');
const { getAllSeller, getCatalogOfSeller } = require('../controllers/buyer');

const router = express.Router();

router.route('/list-of-sellers').get(getAllSeller)
router.route('/seller-catalog/:id').get(getCatalogOfSeller)

module.exports = router;