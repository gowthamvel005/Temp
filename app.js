const JWT = require('./jwtDecoder.js');
var express = require('express');
var boyParser = require("body-parser");
var fs = require("fs");
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static('public'));

app.use (bodyParser.urlencoded({ extended:true}));

app.post("/adduser",function(req,res){
 var username = req.body.userrname;
 var password = req.body.password;

 var obj={};
 var key =req.body.userid;
 var newuser={
     "Username" : username,
     "password" : password

 }
 obj[key] = newuser;
  fs.readFile("users.json","utf8", function(err,data){
      data =Json.parse(data);
      data[key]=obj[key];
      console.log(data);
      var updateuser =JSON.stringify(data);
      fs.write();
  })
})


app.post('/journeybuilder/save/', function (req, res) {
  
    res.send(200, 'Save');  
});
app.post('/journeybuilder/validate/', function (req, res) {
   
    res.send(200, 'Validate');
});
app.post('/journeybuilder/publish/', function (req, res) {

    res.send(200, 'Publish');
} );
app.post('/journeybuilder/execute/', function (req, res) {

   
    JWT(req.body, process.env.jwtSecret, (err, decoded) => {

       
        if (err) {
            console.error(err);
            return res.status(401).end();
        }

        if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            
            // decoded in arguments
          /*  var request= require('request');
           var url='https://requestinspector.com/inspect/01ey6ra3f13nb376yq6n4mgqaq'
           request({
               url:url,
               method:"POST",
               json:decoded.inArguments[0]
           },function(error,response,body)
           {
               if(!error){
                   console.log(body);
               }
           
           }); */

           
            res.send(200, 'Execute');
        } else {
            console.error('inArguments invalid.');
            return res.status(400).end();
        }
    });
}
 );
app.listen(port);