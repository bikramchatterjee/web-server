var express = require('express');
var app = express();
var PORT = 3000;
/*
app.get('/', function (req, res) {
	res.send('Hello Express!');
});
*/

var middleware = {
	requireAuthentication:function(req,res,next){
		consoloe.log('Private rout hit!');
		next();
	},
	logger:function(req,res,next){
	
		console.log('Request:' + new Date().toString() + '' +req.method + '' +req.originalURL);
		next();
	}
};

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send("About Us not really it is my story!");
});

app.use(express.static(__dirname +'/public'));

app.listen(3000,function(){
	console.log('Express Server Started on port '+PORT +'!');
});