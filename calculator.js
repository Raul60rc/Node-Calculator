const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true})); // bodyparser url encoded to pass data from HTML 

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){

   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);

   var result = num1 + num2;
     
    res.send("the result is" + result);
})

app.listen(3000, function(){
    console.log("server is running on port 3000");
});