//jshint esversion: 6
const express = require("express");
const app = express();
const port = 3500;

app.get('/', (req, res)=>{
    res.send("Hello World!");
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});