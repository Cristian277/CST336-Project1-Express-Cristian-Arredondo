const express = require("express");
const app = express();
const faker = require("faker");
//const request = require('request');

var user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar()
};

app.set("view engine","ejs");

app.use(express.static("public")); //specify folder for images,css,js

//routes
//specify method first get or post
//default route and input parameters is request and response
app.get("/",function(req,res){
    
    res.render("index");
    
});


app.get("/c-plus",function(req,res){
    
    res.render("c-plus",{"fakeUser":user});
    
});


app.get("/java", function(req,res){
    
    //var fakeEmail = await getFakeEmail();
    //,{"fakeEmail":fakeEmail}
    
    res.render("java",{"fakeUser":user});
    
});

app.get("/python",function(req,res){
    
    res.render("python");
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Running Express Server...");
});

/*
function getFakeEmail(){

 let promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…
  
  var fakeEmailPromise = faker.internet.email();
  
  if (!reject && resolve.statusCode==200) {
    
    resolve(fakeEmailPromise);
  }
  else {
    reject(Error("It broke"));
  }
  
});

promise.then(
    function(result){console.log(result);},
    function(error){console.log(error);}
    );

}
*/
