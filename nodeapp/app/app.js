var express = require('express'); 
var app     = express(); 

app.get('/', function(req,res){
  res.send('Welcome to Youdo implemented with node.js ');
}); 

app.listen(8080); 
