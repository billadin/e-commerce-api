const { StatusCodes } = require("http-status-codes");
const Seller = require("../models/Seller");

const getAllSeller = async (req, res) => {
    const sellers = await Seller.find()
    if(sellers) {
        return res.status(StatusCodes.OK).json(sellers)
    }
    res.status(StatusCodes.OK).json({msg: 'No seller found'})
}


module.exports = getAllSeller;