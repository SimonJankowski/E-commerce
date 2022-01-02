const mongoose = require("mongoose");
const Schema = mongoose.Schema;  //just to short up further instructions

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
countInStock: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('product', productSchema)
