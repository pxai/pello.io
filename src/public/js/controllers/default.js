'use strict';

var app = angular.module('pello',[]);

app.controller('DefaultCtrl', function($scope) {
  $scope.default = 'This is default data';
});
