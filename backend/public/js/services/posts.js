/**
* posts.js
* Service used to load blogpost data
* Depends on angular resources
* Pello Xabier Altadill Izura - http://pello.io
*/
// Check 80
define(['services/services'],
	function(services) {
		services.factory('Posts', [ function($resource) {
				console.log('Loading resource');
				return 'sample';//$resource('/blog/');
			}]);
	}
);