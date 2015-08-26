var db   = require('../lib/mysql'); 

var User = function(){}; 

User.prototype.noUserFound = 'no user found'; 

User.prototype.login = function(login, password, callback){
    if( ! login || ! login.length ) return callback("login can't be empty"); 
    if( ! password || ! password.length ) return callback("password can't be empty"); 
    
    var loginFileld = ( login.match('@') ) ? 'email' : 'username'; 
    var self = this; 
    db.query('SELECT id, username, user_type_id FROM users WHERE ?? = ? AND password = ?', [
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
                return callback(self.noUserFound); 
            }
            
            callback(null, user[0]); 
            
        }
    ); 
}; 
var user =  new User;
module.exports = user; 