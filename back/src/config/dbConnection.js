const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = process.env.DB_URI;

const  connectToDb = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log('Connected to Database');
    } catch (err) {
        console.error(`Error connecting to database ${err}`);
    };
};

module.exports= connectToDb;