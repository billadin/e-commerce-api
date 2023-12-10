const Buyer = require("../models/Buyer");

const register = async (req, res) => {
    const email = req?.body?.email;
    const isExist = await Buyer.findOne({ email });
  
    if(isExist) {
      throw new BadRequestError('User already exist')
    }
    const user = await Buyer.create({ ...req.body });
  
    // res.status(StatusCodes.CREATED).json({
    //   user: {
    //     email: user.email,
    //     username: user.username,
    //     img:user.img,
    //     meta
    //   },
    // });
    console.log(user)
  };