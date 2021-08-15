var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));
app.get("/",function(req,res){
    res.render("search");
});
app.get("/results",function(req,res){
  var query=req.query.search;
  var url="https://newsapi.org/v2/everything?q="+query+"&apiKey=892a80f608dc4017ad6df7d0dbd5a403";
   request(url,function(error,response,body){
     if(!error & response.statusCode==200){
         var data=JSON.parse(body);
     res.render("results",{data:data});
     }
   });
});
app.listen(3000,process.env.IP,function(){
  console.log("News App Server started!!");
});