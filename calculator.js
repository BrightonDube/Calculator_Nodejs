//jshint esversion: 6
const express = require("express");
const app = express();
const port = 3500;

function add(num1, num2){
    return num1 + num2;}
function multiply(num1, num2) { 
   return num1 * num2;}
function divide(num1, num2) { 
   return num1 / num2;}
function subtract(num1, num2) {
   return num1 - num2;}

const calculator = function(num1, num2, operator){   
    return operator(num1, num2);
   // operator is a function that performs the required computation.;
};

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);

});
app.get('/bmicalculator', (req, res)=>{
    res.sendFile(`${__dirname}/bmicalculator.html`);

});


app.post("/", (req, res)=>{    
    let num1 = parseInt(req.body.num1 ,10);
    let num2 = Number(req.body.num2);
    let oper = req.body.operator;
    let answer;

    switch (oper){
        case "+":
            answer = calculator(num1, num2, add);
            break;
        
        case "-":
            answer = calculator(num1, num2, subtract);
            break;
        
        case "*":
            answer = calculator(num1, num2, multiply);
            break;

        case "/":
            answer = calculator(num1, num2, divide);
            break;

        default:
            console.log("You did not enter a correct operator");
            break;
    }  

    let weight = Number(req.body.weight);
    let height = Number(req.body.height); 
    console.log(weight);  
    console.log(height); 

    let answerbmi = weight / (height * height);
    if (answer === undefined){
        res.send(`Your BMI is : ${answerbmi}`);
    }
    
    else  res.send(`The result is ${answer}`);
});

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
});