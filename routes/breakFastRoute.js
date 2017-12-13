var express = require('express');
var nodemailer = require('nodemailer');
var route = express.Router();

var fuckInfy = {
	'years' : 3,
	'died' : 'everyday',
	'born' : 'everyday',
	'worship': 'my determination',
	'self believe' : 'always',
	'wantout' : 'yes',
	'readyForAnything': 'always'
}

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

route.get('/', function(req, res){
	res.send('hello route');
});

route.get('/all', function(req, res){
	res.send(fuckInfy);
});

route.get('/send', function(req, res){
	var mailOptions={   
		to: "abhishek.sinha132@gmail.com",
        from : 'vivek.tarun17@gmail.com',
        cc: "vivektarun89@gmail.com",
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

module.exports = route;