var user = require(__dirname + '/../app/models/user');  

describe('User authentication', function(){

  it('should login user with valid credentials', function(done){
    
    user.login('admin','adminpass', function(err, user){
        expect(err).toEqual(null); 
        done(); 
    }); 
    
  });
  
  it('login user with username or email', function(done){
    
    user.login('admin@mail.ru','adminpass', function(err, user){
        expect(err).toEqual(null); 
        done();  
    }); 
    
  });
  
  
});