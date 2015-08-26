module.exports = {
	app: {
		port: process.env.YOUDO_APP_PORT || 8080
	},
	session: {
        name: 'youdo', 
        key:  'youdo', 
        cookie: {
            httpOnly: false, 
            secure: false
        },
        secret: 'keyboard cat'
    }, 
    db:{
        host     : 'localhost',
        user     : 'youdoadmin',
        password : 'youdopassword',
        database : 'youdo'
    }
};