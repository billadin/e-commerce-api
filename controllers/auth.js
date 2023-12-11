const { Error } = require("mongoose");
const Buyer = require("../models/Buyer");
const { StatusCodes } = require("http-status-codes");
const Seller = require("../models/Seller");
const BadRequestError = require("../errors/bad-request");

const register = async (req, res) => {
  console.log(req.body)
  const email = req.body.email;
  const type = req.body.type;

  if (type === "buyer") {
    const isExist = await Buyer.findOne({ email });
    if (isExist) {
      throw new BadRequestError("User already exist");
    }
    const user = await Buyer.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(user);
  } else if (type === "seller") {
    const isExist = await Seller.findOne({ email });
    if (isExist) {
      throw new BadRequestError("User already exist");
    }
    const user = await Seller.create({ ...req.body });
    res.status(StatusCodes.CREATED).json(user);
  }
};

module.exports = { register };
