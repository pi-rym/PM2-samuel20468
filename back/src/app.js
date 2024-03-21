const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routers");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(router);

// 404 Error Handler 
app.use((req, res) => { 
    res.status(404).send({ error: "Not Found" });  
});  

// Global Error Handler  
app.use((err, req, res, next) => {  
    console.log(`Error Occurred : ${err.message}`);    
    res.status(err.statusCode).send({ error: err.message })
    next();    
});

module.exports = app;