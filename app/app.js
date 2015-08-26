var express      = require('express'); 
var app          = express(); 
var cookieParser = require('cookie-parser'); 
var bodyParser   = require('body-parser'); 
var session      = require('express-session'); 
var config       = require(__dirname + '/../config'); 

var routes       = require(__dirname + '/routes'); 

app.use(cookieParser()); 
app.use(session(config.session)); 

app.use(express.static(__dirname + '/../public')); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use('/auth', routes.Auth); 

app.get('/home', routes.filters.authRequired, function(req,res){
  res.send('welcome home'); 
}); 


app.listen(8080); 
