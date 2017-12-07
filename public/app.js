var Teja = angular.module('teja', ['ngRoute']);

  Teja.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(true);	
	
	$routeProvider	
		.when('/poc/:id', {
			templateUrl : 'templates/pocDetails.html',
			controller  : 'pocDetailsController'
		})	
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		.when('/menu', {
			templateUrl : 'templates/menu.html',
			controller  : 'MenuController'
		})
		.when('/blog', {
			templateUrl : 'templates/blog.html',
			controller  : 'BlogController'
		})
		.when('/contactus', {
			templateUrl : 'templates/contactus.html',
			controller  : 'contactController'
		})
		.when('/poc', {
			templateUrl : 'templates/poc.html',
			controller  : 'pocController'
		})		
		.otherwise({
			redirectTo : '/'
		});	
});
Teja.directive('navBarDirective', function(){
	return{
		restrict : 'E',
		controller: 'navBarController',
		templateUrl: 'templates/navigation.html'
	}
});
Teja.directive('footerDirective', function(){
	return{
		restrict : 'E',
		templateUrl: 'templates/footer.html'
	}
});
