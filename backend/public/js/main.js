/**
* main.js
* Config file for require.js
* Pello Xabier Altadill Izura - http://pello.io
*/
require.config({
	baseUrl: 'js',
	paths: {
		angular: 'vendor/angular',
		angularResource: 'vendor/angular-resource.min',
		domReady: 'vendor/domReady'
		//jquery: 'js/vendor/jquery',
		//twitter: 'vendor/bootstrap',
	},
	shim: {
		/*'twitter/js/bootstrap': {
			deps: ['jquery/jquery']
		},*/
		angular: {
			//deps: [ 'jquery/jquery','twitter/js/bootstrap'],
			exports: 'angular'
		},
		angularResource: { deps:['angular']}
	}
});

require([
	'app',
	// Note this is not Twitter Bootstrap
	// but our AngularJS bootstrap
	'bootstrap',
	'controllers/home',
	'controllers/head',
	'services/header',
	'services/posts'
	//'directives/ngbkFocus'
	// Any individual controller, service, directive or filter file
	// that you add will need to be pulled in here.
	// This will have to be maintained by hand.
	],

	function (angular, app) {
		'use strict';
		app.config(['$routeProvider',
			function($routeProvider) {
				// Define your Routes here
			}
		]);
	}
);
