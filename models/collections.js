var mongoose =  require('mongoose');
var config = require('../config');
var bcrypt = require('bcrypt-nodejs');

//connect to db connection string

let db = 'mongodb://localhost:27017/multivision';

//connect to mongo

mongoose.connect(db, function(err){
	console.log(err);
});

//Listen to mmongoose connection events

mongoose.connection.on('connected', function(){
	console.log('Successfully opened a connection to '+ db);
});

mongoose.connection.on('disconnected', function(){
	console.log('Successfully disconnected a connection  '+ db);
});

mongoose.connection.on('error', function(){
	console.log('An error occured to'+ db);
});

// create schema for user

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	
	'name' : String,
	'username' : {type : String, require : true, index : {unique : true }},
	'password' : {type : String, require : true, select : false} 

});

UserSchema.pre('save', function(next){
	var user = this;

	if(!user.isModified('password')) return next();
	bcrypt.hash(user.password, null, null, function(err, hash){
		if(err) return next(err);

		user.password = hash;
		next();
	})

});

UserSchema.methods.comparePassword = function(password){

	var user = this;

	return bcrypt.compareSync(password, user.password);
};


module.exports = mongoose.model('User', UserSchema) ;



