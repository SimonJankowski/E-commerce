require("dotenv").config();

const express = require('express')
const mongoose = require("mongoose");

const connectDB = require("./config/db")
const productRoutes = require('./routes/productRoutes')
const app = express();

//Database connection - Moved to other file
connectDB()

app.use(express.json())

app.use('/api/products', productRoutes);




// app.all("*", (req, res, next) => {            //here im basicly trying to say: if yout url is not on my webpage than...
//     next(new ExpError("Page not found", 404))
// })

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`WatchMe avaible on port ${PORT}`)
})