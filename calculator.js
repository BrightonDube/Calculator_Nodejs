//jshint esversion: 6
const express = require("express");
const app = express();
const path = require('path')
const port = 3500;

app.get('/', (req, res)=>{
    res.sendFile(`${path.join(__dirname, "/index.html")}`);
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});