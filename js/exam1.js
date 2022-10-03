// Defining a module
// a module associates part of your angularJS app with part of your html document
// access to data / useful helpers / ect
// params: module name, optional config values
var app1 = angular.module('app1', []);

// Defining a controller
// a controller links HTML elements to variables in the $scope
// params: controller name, factory function with $scope passed in
// angular automatically recognizes $scope and passes that value in for us (dependency injection)
app1.controller('ctrl1', function($scope) {
    // data will be available from the $scope object
    $scope.first = 1;
    $scope.second = 2;

    // scope can also have functions
    $scope.updateValue = function() {
        // the '+' before a variable -> casting
        $scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + +$scope.second)
    }

    // so far we can access our values using ng-model="<scope variable name>"
    // or using double brackets and the variable name {{ calculation }}
    // or `data-ng-bind="<scope variable name>"
    // ng-repeat for array data
});



// https://www.youtube.com/watch?v=OPxeCiy0RdY&t=610s