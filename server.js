var port = process.env.PORT || 3000	;

var express = require('express');
var morgan =  require('morgan');
var bodyParser = require('body-parser');
var dotenv =  require('dotenv');
var config = require('./config');
var breakfast = require('./routes/breakFastRoute');

//Create an express application

var app = express();

//Load in environment variable
dotenv.config({ verbose: true });




app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use('/api/breakfast', breakfast);


app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});



//Start up server

app.listen(port, function(){
	console.log('Listening on port '+ port);
})













