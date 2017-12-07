//connect to db connection string

var db = 'mongodb://localhost:27017/multivision';

// Create a port for server to listen on

var port = process.env.PORT || 3000;

var express = require('express');
var morgan =  require('morgan');
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');
var dotenv =  require('dotenv');
var nodemailer = require('nodemailer');


//Create an express application

var app = express();

//Load in environment variable
dotenv.config({ verbose: true });

//connect to mongo

mongoose.connect(db, function(err){
	console.log(err);
})

//Listen to mmongoose connection events

mongoose.connection.on('connected', function(){
	console.log('Successfully opened a connection to '+ db);
});

mongoose.connection.on('disconnected', function(){
	console.log('Successfully disconnected a connection from '+ db);
});

mongoose.connection.on('error', function(){
	console.log('An error occured to'+ db);
});

var mongooseSchema = mongoose.Schema({messages : String});
var Messages = mongoose.model('Messages', mongooseSchema);

Messages.findOne({}, function(err, result){
	if(err){
		console.log(err);
		return;
	}
	console.log(result.messages);
});






// Configure express middleware
var smtpTransport = nodemailer.createTransport({
	 host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
	auth:{
		user:"vivek.tarun17@gmail.com",
		pass:'21FLUTEplay.'
	}
});
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
// app.get('/:id', function(req, res){
	
// 	console.log(req.ips);
// });

app.get('/send', function(req, res){
	var mailOptions={
		to: "vivektarun89@gmail.com",
        from : 'vivek.tarun17@gmail.com',
        cc: 'vsvikasm@gmail.com',
        //subject : req.query.subject,
        //text : req.query.text
        subject: 'this is testing',
        text: '<h1>Hi i am learning node</h1>'
    };
    console.log('request received');
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
        console.log(error);
        res.end("error");
     }else{
        console.log("Message sent: " + response.message);
        res.end("sent");
     }
	});

});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});



//Start up server

app.listen(port, function(){
	console.log('Listening on port '+ port);
})













