const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express()
const port = 3000



app.get("/",function(req,res){

  res.sendFile(__dirname+"/signup.html");
})

app.listen(port, function () {
  console.log("listening port 3000");
});
