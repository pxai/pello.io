/**
* head.js
* Head controller
* Pello Xabier Altadill Izura - http://pello.io
*/

define(['controllers/controllers','services/header'],
	function(controllers) {
		controllers.controller('HeadCtrl',['$scope', 'Headers', function ($scope, Headers) {
			// better with resources
			Headers.get().success(function(data)  {
				$scope.title = data.title;
				$scope.description = data.description;
				$scope.keywords = data.keywords;
				$scope.author = data.author;
			console.log('data: ' + data.title);
		});
	}]);
});