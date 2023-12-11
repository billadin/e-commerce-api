const { StatusCodes } = require("http-status-codes");
const Seller = require("../models/Seller");
const Order = require("../models/Order");

const getAllSeller = async (req, res) => {
    const sellers = await Seller.find()
    if(sellers) {
        return res.status(StatusCodes.OK).json(sellers)
    }
    res.status(StatusCodes.OK).json({msg: 'Seller not found'})
}


const getCatalogOfSeller = async (req, res) => {
    const {seller_id} = req.params;
    const seller = await Seller.findById(seller_id)
    if(seller) {
        const catalog = seller.catalog;
        res.status(StatusCodes.OK).json(catalog)
    }
    res.status(StatusCodes.OK).json({msg: 'Seller not found'})
}


const createOrder = async (req, res) => {
    const {seller_id} = req.params;
    const order = await Order.create({ products: req.body, seller_id})
    res.status(StatusCodes.CREATED).json(order) 

}

module.exports = {getAllSeller,getCatalogOfSeller, createOrder};