var express = require('express');
var app = express();
var PORT = 3000;
/*
app.get('/', function (req, res) {
	res.send('Hello Express!');
});
*/
var middleware ={
	requireAuthentication: function(req,res,next){
		console.log('Private route hit!');
		next();
	}
};
app.use(middleware.requireAuthentication);


app.get('/about', function (req, res) {
	res.send('About Us story now');
});

/*
app.get('/Contactus', function (req, res) {
	res.send('Contact Us at 27*******');
});
*/

//console.log(__dirname);
app.use(express.static(__dirname +'/public'));
//app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
	console.log("Express Server started: " +' at port : ' +PORT);
});