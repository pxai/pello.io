var directiveController = angular.module('app',[]);

var message = 'Testing the directive';



function DirectiveController ($scope) {
	$scope.message = message;
}

directiveController.directive('ngpxUpper', function () {
	return {
		link: function (scope, element, attrs, controller) {
			element[0].value = "yea";
			console.log("Scope: ");
			console.log(scope);
			console.log("Attrs: ");
			console.log(attrs);
			//console.log("Controller: " + controller);
			alert(element[0].value);
		}
	};
});
