const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use(express.static("public")); //specify folder for images,css,js

//routes
//specify method first get or post
//default route and input parameters is request and response
app.get("/",function(req,res){
    
    res.render("index");
    
});


app.get("/c-plus",function(req,res){
    
    res.render("c-plus");
    
});


app.get("/java",function(req,res){
    
    res.render("java");
    
});

app.get("/python",function(req,res){
    
    res.render("python");
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Running Express Server...");
});