const { StatusCodes } = require("http-status-codes");
const Seller = require("../models/Seller");

const getAllSeller = async (req, res) => {
    const sellers = await Seller.find()
    if(sellers) {
        return res.status(StatusCodes.OK).json(sellers)
    }
    res.status(StatusCodes.OK).json({msg: 'Seller not found'})
}


const getCatalogOfSeller = async (req, res) => {
    const {id} = req.params;
    const seller = await Seller.findById(id)
    if(seller) {
        const catalog = seller.catalog;
        res.status(StatusCodes.OK).json(catalog)
    }
    res.status(StatusCodes.OK).json({msg: 'Seller not found'})
}


module.exports = {getAllSeller,getCatalogOfSeller};