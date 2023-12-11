const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        minlength: 3
    },
    price: {
        type: String,
        required: [true, 'Please provide a product price'],
    }
})


module.exports = mongoose.model('Product', ProductSchema)