const express = require("express");
const router = require("./routers");

const app = express();

app.use(router);

// 404 Error Handler 
app.use((req, res) => { 
    res.status(404).send({ error: "Not Found" });  
});  

// Global Error Handler  
app.use((err, req, res, next) => {  
    console.log(`Error Occurred : ${err.message}`);    
    res.status(500).send({ error: 'Internal Server Error' })
    next();    
});

module.exports = app;