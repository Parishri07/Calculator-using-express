const express = require('express'); 
// First => $ npm install express -> Installing express

const bodyParser = require('body-parser');
// $ npm install body-parser -> to be able to use the data on the main page in post method that is num1 and num2  

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
// using bodyParser we can parse the HTTP request
// to grab(or parse) the info from an html file we use urlencoded
// extended:true -> allows us to post nested objects 

app.get("/", function (req, res){
//  res.send(__dirname);
// __dirname gives the path of the directory -> C:\Users\Parishri\OneDrive\Desktop\Study stuff\Web development\Back-End\Calculator

// res.send(__filename);
// C:\Users\Parishri\OneDrive\Desktop\Study stuff\Web development\Back-End\Calculator\calculator.js

   res.sendFile(__dirname + "/index.html");
})

app.post("/",function (req, res){

    // console.log(req.body);
    //req.body prints the data that was been requested

    // console.log(req.body.num1);
    // we can tap into its components by req.body.num1

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    // without ,num1 and num2 are considered as strings

    console.log(num1 + num2);

    res.send("Thanks for posting");
});
// we make a post method 

app.listen(3000, function (){

    console.log("Server ported on 3000");
})


app.get("/bmicalculator", function (req, res){

  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function (req, res){
    
    var wt = parseFloat(req.body.weight);
    var ht = parseFloat(req.body.height);

    var bmi = wt / (ht*ht);

    console.log("Thanks for posting!");
    res.send("Your BMI is "+ bmi);

})