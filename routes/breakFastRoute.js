var express = require('express');
var nodemailer = require('nodemailer');
var User = require('../models/collections')
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
	var software = req.headers['user-agent'];
	// 
	res.json({'ip' : req.connection.remoteAddress , 'language' : (req.headers['accept-language']).split(',')[0], "software": software.substring(software.indexOf('(') + 1,software.indexOf(')')) });
});



route.post('/test', function(req, res){
	var user = User({
		name : 't',
		username : 'v',
		password : 'hello'
	});

	user.save(function(err){
		if(err){
			res.send(err);
			return ;
		}
		res.json({message : 'user inserted'})
	});
});

route.get('/users', function(req, res){
	User.find({}, function(err, result){
		res.json(result)
	})
});

route.get('/:id', function(req, res){
	var date = req.params.id.match(/^[0-9]{1,}$/g);
	if(date == null){
		var d = new Date(req.params.id);
	}else{
		var d = new Date(parseInt(req.params.id));
	}	
		
	if(d != 'Invalid Date'){
		res.json(d.getTime() +'-----'+ d.toDateString());	   
	}
	else{
		res.json('Unix : null, Natural : null');	
	}	
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