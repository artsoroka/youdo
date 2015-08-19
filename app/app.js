var express = require('express'); 
var app     = express(); 

app.use(express.static(__dirname + '/../public')); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.get('/', function(req,res){
  res.render('mainpage'); 
}); 

app.listen(8080); 
