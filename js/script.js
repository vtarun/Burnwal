var app = angular.module('BurnwalX',[]);

app.controller('foodController', function($scope){
	$scope.breakfast= [ {'name':'Dosa','price':60,'image':'images/bf-1.jpg'},
						{'name':'Idli','price':40,'image':'images/bf-2.jpg'},
						{'name':'chhole-bhature','price':250,'image':'images/chole-bhature.jpg'},
						{'name':'Kottu Parotha','price':290,'image':'images/kottu-parotha.jpg'},
						{'name':'Poha','price':300,'image':'images/poha-1.jpg'},
						{'name':'Puttu','price':380,'image':'images/puttu.jpg'}];
						
	$scope.meals= [ {'name':'Chicken Biryani','price':280,'image':'images/tandoori-chicken.jpg'},
					{'name':'Chicken Tikka Masala','price':320,'image':'images/tandoori-chicken.jpg'},
					{'name':'Chicken Hydrabadi','price':250,'image':'images/tandoori-chicken.jpg'},
					{'name':'Chicken Lasuni','price':290,'image':'images/tandoori-chicken.jpg'},
					{'name':'Chicken 65','price':300,'image':'images/tandoori-chicken.jpg'},
					{'name':'Chicken Rogan Gosh','price':380,'image':'images/tandoori-chicken.jpg'}];

	$scope.beverage = ['item-1','item-1','item-1','item-1','item-1','item-1'];
});

app.directive('navBarDirective', function(){
	return{
		restrict : 'E',		
		templateUrl: 'templates/navigation.html'
	}
});

app.directive('footerDirective', function(){
	return{
		restrict : 'E',
		templateUrl: 'templates/footer.html'
	}
});

