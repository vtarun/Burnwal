var mongoose =  require('mongoose');

//connect to db connection string

var db = 'mongodb://localhost:27017/multivision';

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