/**
* app.js
* main entryfile for angular stuff
* Pello Altadill
*/
//'use strict';

define(['angular','controllers/controllers','services/services'], function (angular) {
  return angular.module('pello', ['controllers','services']);
});

app.config(['$routeProvider',function ($routeProvider) {
   $routeProvider
      .when('/', {
        templateUrl: 'views/default.html',
        controller: 'HomeCtrl'   
      })
      .when('/sample', {
        templateUrl: 'views/sample.html',
        controller: 'HomeCtrl'  
      })
      .when('/other', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'   
      })
      .otherwise({
        templateUrl: 'views/default.html',
        controller: 'OtherCtrl'  
      });

}]);


