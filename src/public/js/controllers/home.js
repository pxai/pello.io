
/**
* home.js
* Home controller
* Pello Xabier Altadill Izura - http://pello.io
*/
define(['controllers/controllers','services/posts'],
	function(controllers) {
		controllers.controller('HomeCtrl',['$scope','Posts',function ($scope,Posts) {
  			$scope.awesomeThings = [
			    'HTML5 Boilerplate',
			    'AngularJS',
			    'Testacular'
		  	];
		  $scope.sample = 'Yah';//Post.get();
		}]);
	}
);