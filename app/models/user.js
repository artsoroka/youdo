var db   = require('../lib/mysql'); 

var User = function(){}; 

User.prototype.login = function(login, password, callback){
    if( ! login || ! login.length ) return callback("login can't be empty"); 
    if( ! password || ! password.length ) return callback("password can't be empty"); 
    
    var loginFileld = ( login.match('@') ) ? 'email' : 'username'; 
    
    db.query('SELECT id FROM users WHERE ?? = ? AND password = ?', [
            loginFileld, 
            login, 
            password
        ], function(err, user){
            if( err ){
                console.log('db error: ', err); 
                return callback(err); 
            } 
            
            if( ! user || ! user.length ){
                console.log('no user found: ', login, password );
                return callback('no user found'); 
            }
            
            callback(null, user[0]); 
            
        }
    ); 
}; 
var user =  new User;
module.exports = user; 