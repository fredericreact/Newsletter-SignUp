const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
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
  const firstName= req.body.firstName;
const lastName= req.body.lastName;
const email= req.body.email;

  const data = {
        members: [
          {
            email_address: email,
            status:"subscribed",
            merge_fields:{
            FNAME:firstName,
            LNAME:lastName
            }
          }
        ]
      };

const jsonData = JSON.stringify(data);

const url = 'https://us9.api.mailchimp.com/3.0/lists/d5726dde94';

const options ={
   method:"POST",
   auth: "fred:ba96f7e7752af5d5fc9f72b7ab049841-us9"
 }

 const request = https.request(url, options, function(response){
response.on("data",function(data){
  console.log(JSON.parse(data));
})
})

request.write(jsonData);
request.end();

})


app.listen(port, function () {
  console.log("listening port 3000");
});
