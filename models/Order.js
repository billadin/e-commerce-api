const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  products: {
    type: [
      {
        name: {
          type: String,
          required: [true, "Please provide product name"],
          maxlength: 50,
          minlength: 3,
        },
        price: {
          type: String,
          required: [true, "Please provide price"],
        },
      },
    ],
    default: [],
  },
  seller_id: {
    type: mongoose.Types.ObjectId,
    ref: "Seller",
    required: [true, "Please provide seller ID"],
  },
});

module.exports = mongoose.model("Order", OrderSchema);
