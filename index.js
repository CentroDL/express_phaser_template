var express = require("express");
var path    = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use( express.static("public/") );

app.get("/", function(req, res){

  res.sendFile( path.resolve( __dirname + "/views/index.html") );

});

app.listen(port, function(){
  console.log("Game Server Started!");
})
