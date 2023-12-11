const { StatusCodes } = require("http-status-codes");
const Seller = require("../models/Seller");
const Order = require("../models/Order");

const addProduct = async (req, res) => {
    const email = "lohhn@gmail.com";
    const seller = await Seller.find({email})
    console.log(seller)
    if(seller) {
        const products = await Seller.updateOne({ email },
            { $push: { catalog: req.body } });
        return  res.status(StatusCodes.CREATED).json({ products });
    }
    res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Seller not found' });
}

const getASllOrders = async (req, res) => {
    const _id = "6576bb8b78e1ca99d1c8f0ef";
    const orders = await Order.find({ seller_id: _id })
    if(orders) {
        return  res.status(StatusCodes.CREATED).json(orders);
    }
    res.status(StatusCodes.BAD_REQUEST).json({ msg: 'No orders found' });
}


module.exports = {addProduct, getASllOrders};