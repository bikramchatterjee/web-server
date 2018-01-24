var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send("About Us not really it is my story!");
});

app.use(express.static(__dirname +'/public'));

app.listen(3000,function(){
	console.log('Express Server Started on port '+PORT +'!');
});