require("dotenv").config();

const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");

const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes')
const app = express();

//Database connection - Moved to other file
connectDB()

app.use(express.json())
app.use(cors());

app.use('/api/products', productRoutes);





const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`WatchMe avaible on port ${PORT}`)
})