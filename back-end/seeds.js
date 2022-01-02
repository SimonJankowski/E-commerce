require('dotenv').config();
const mongoose = require("mongoose");
const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');


connectDB()

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("successfully imported products")
    } catch (error) {
        console.error("Error with data import", error)
    }
}

importData().then(() => {
    mongoose.connection.close()
})