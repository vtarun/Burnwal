var Teja = angular.module('teja', ['ngRoute']);

  Teja.config(function($routeProvider, $locationProvider){
	$routeProvider		
		.when('/home', {
			templateUrl : 'templates/home.html',
			controller  : 'HomeController'
		})
		.when('/menu', {
			templateUrl : 'templates/menu.html',
			controller  : 'MenuController'
		})
		.when('/blog', {
			templateUrl : 'templates/blog.html',
			controller  : 'HomeController'
		})
		.when('/contactus', {
			templateUrl : 'templates/contactus.html',
			controller  : 'contactController'
		})
		.otherwise({
			redirectTo : '/home'
		})
		$locationProvider.html5Mode(true);	
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
