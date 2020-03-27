//jshint esversion: 6
const express = require("express");
const app = express();
const port = 3500;
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);

});

app.post("/", (req, res)=>{    
    let num1 = parseInt(req.body.num1 ,10);
    let num2 = parseInt(req.body.num2, 10);
    
    let answer = num1 + num2;
    console.log(answer);
    res.end();
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});