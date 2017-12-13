Teja.controller('contactController', function($scope, $http){
	$scope.sendMail = function(){
		//alert('working');
		$http.get('http://localhost:3000/api/breakfast/send').then(function(response){
			console.log('link hit');	
		}, function(error){
			console.log(error);
		});	
	};
});