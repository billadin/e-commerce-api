const BadRequestError = require("../errors/bad-request");
const Buyer = require("../models/Buyer");
const Seller = require("../models/Seller");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const {username, email, type } = req.body;
  if (!email || !type || !username ||!password) {
    throw new BadRequestError('Please provide all details')
  }

  if (type === "buyer") {
    const user = await Buyer.create({ ...req.body });
    return res.status(StatusCodes.CREATED).json(user);
  }

  if (type === "seller") {
    const user = await Seller.create({ ...req.body });
    return res.status(StatusCodes.CREATED).json(user);
  }
  
  res.status(StatusCodes.BAD_REQUEST).json({msg: 'Please provide a valid role'});

};



const login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide all details')
  }
  const buyerUser = await Buyer.findOne({ email, password });
  const sellerUser = await Seller.findOne({ email, password });
  
  if(buyerUser) {
    const token = buyerUser.createJWT();
    return res.status(StatusCodes.OK).json({
      user: {
        email: buyerUser?.email,
        token,
      },
    })
  }

  if(sellerUser) {
    const token = sellerUser.createJWT();
    return res.status(StatusCodes.OK).json({
      user: {
        email: sellerUser?.email,
        token,
      },
    })
  }
  res.status(StatusCodes.BAD_REQUEST).json({msg: 'Invalid login credentials'})
};

module.exports = { register, login };
