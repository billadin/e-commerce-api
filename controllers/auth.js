const BadRequestError = require("../errors/bad-request");
const Buyer = require("../models/Buyer");
const Seller = require("../models/Seller");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const type = req.body.type;

  const user = await Buyer.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(user);

  // if (type === "buyer") {
  //   const user = await Buyer.create({ ...req.body });
  //   res.status(StatusCodes.CREATED).json(user);
  // }

  // if (type === "seller") {
  //   const user = await Seller.create({ ...req.body });
  //   res.status(StatusCodes.CREATED).json(user);
  // }

};



const login = async (req, res) => {

  const { email, type } = req.body;

  if (!email || !type) {
    throw new BadRequestError('Please provide all details')
  }
  const buyerUser = await Buyer.findOne({ email });
  console.log(buyerUser)

  
};

module.exports = { register, login };
