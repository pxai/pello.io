/**
* headers.js
* Service used to load header data
* Pello Xabier Altadill Izura - http://pello.io
*/
define(['services/services'],
	function(services) {
		services.factory('Headers', ['$http', function($http) {
			// check page 110
			// better use resources
			return {
				get: function () {
					return $http.get('/headers/', {
							// Set the Authorization header. In an actual app, you would get the auth
							// token from a service
							//headers: {'Authorization': 'Basic Qzsda231231'},
							params: {id: 5}
						});
				}
			}	

		}]);
	}
);
