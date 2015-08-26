var express    = require('express'); 
var router     = express.Router();  
var bodyParser = require('body-parser'); 
var User       = require(__dirname + '/../models/user'); 

router.use(bodyParser.urlencoded({ extended: false })); 

router.get('/login', function(req,res){
    res.render('auth/login'); 
});

router.post('/login', function(req,res){
    
    if( ! req.body.login || ! req.body.password )
        return res.status(400).send('invalid params'); 
    
    User.login(req.body.login, req.body.password, function(err, user){
        
        if( err == User.noUserFound )
            return res.render('auth/login', {
                status: 'no user found', 
                input: {
                    login: req.body.login 
                }
            }); 
        
        if( ! user ) 
            return res.status(500).send('db error: could not authenticate user'); 
            
        req.session.user = user; 
        res.redirect('/auth/session'); 
        
    }); 
    
 }); 

router.get('/session', function(req,res){
    res.json(req.session); //send('auth completed'); 
}); 

module.exports = router; 