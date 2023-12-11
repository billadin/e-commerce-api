const { StatusCodes } = require("http-status-codes");
const Product = require("../models/Product");
const Seller = require("../models/Seller");

const addProduct = async (req, res) => {
    const email = "lohhn@gmail.com";
    const seller = await Seller.find({email})
    console.log(seller)
    if(seller) {
        const products = await Seller.updateOne({ email },
            { $push: { catalog: req.body } });
        res.status(StatusCodes.CREATED).json({ products });
    }
}


module.exports = addProduct;