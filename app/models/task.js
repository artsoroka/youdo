var db   = require('../lib/mysql'); 

function Task(){}  

Task.prototype.list = function(cb){
    var sql = 'SELECT t.*, c.title, u.username FROM tasks AS t JOIN categories AS c ON t.category_id = c.id JOIN users AS u ON t.author_id = u.id'; 
    
    db.query(sql, function(err, tasks){
        if(err){
            console.log('db error: ', err); 
            return cb('db error'); 
        }
        cb(null, tasks);  
    }); 
}; 

Task.prototype.find = function(query, cb){
    var query = query || {};  
    if( ! query.id ) return this.list(cb); 
    
    var sql = 'SELECT t.*, c.title, u.username FROM (select * from tasks where id = ?) AS t JOIN categories AS c ON t.category_id = c.id JOIN users AS u ON t.author_id = u.id'; 
    
    db.query(sql, [query.id], function(err, tasks){
        if(err){
            console.log('db error: ', err); 
            return cb('db error'); 
        }
        cb(null, tasks);  
    }); 
}; 

module.exports = new Task(); 
 