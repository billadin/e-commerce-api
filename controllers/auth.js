const Buyer = require("../models/Buyer");
const Seller = require("../models/Seller");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const type = req.body.type;

  if (type === "buyer") {
    const user = await Buyer.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(user);
  }

  if (type === "seller") {
    const user = await Seller.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(user);
  }
  
};

module.exports = { register };
