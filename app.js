const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
//server need this to serve static files like css whereas bootstrap is remote

app.get("/",function(req,res){

  res.sendFile(__dirname+"/signup.html");
})

app.post("/", function(req,res){
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var email= req.body.email;

console.log(firstName,lastName,email);

})

app.listen(port, function () {
  console.log("listening port 3000");
});
