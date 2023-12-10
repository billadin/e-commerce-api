const { Error } = require("mongoose");
const Buyer = require("../models/Buyer");
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const email = req?.body?.email;
    const isExist = await Buyer.findOne({ email });
  
    if(isExist) {
        throw new Error('User already exist')
    }
    const user = await Buyer.create({ ...req.body });  
    res.status(StatusCodes.CREATED).json(user);
  };


  module.exports = { register}