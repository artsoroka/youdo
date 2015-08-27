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
var task = require('./models/task'); 

app.get('/', function(req,res){
    task.list(function(err, tasks){ 
        
        if( err ) return res.status(500).send('db error'); 

        res.render('tasks/list', {
            tasks: tasks
        });     

    }); 
    
}); 

app.get('/tasks/:taskId', function(req,res){
    task.find({id: req.params.taskId}, function(err, data){
        if( err ) return res.status(500).send('db error'); 
        if( ! data || ! data.length ) return res.status(404).send('no task found'); 
        
        res.json(data); 
        
    });
}); 

app.listen(8080); 
