const express = require('express');
const { register } = require('../controllers/auth');
const router = express.Router();

router.route('/auth').post(register)