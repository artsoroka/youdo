module.exports = {
    Auth: require(__dirname + '/auth'), 
    filters: {
        authRequired: function(req,res,next){
            if( ! req.session || ! req.session.user ) 
                return res.status(403).send('not authenticated'); 
            next(); 
        }
    }
}; 