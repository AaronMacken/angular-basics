var app2 = angular.module('app2', []);

app2.controller('ctrl1', function($scope) {
    $scope.randomNum1 = Math.floor((Math.random() * 10) +1);
    $scope.randomNum2 = Math.floor((Math.random() * 10) + 1);
});

app2.controller('badCtrl', function($scope) {
    var badFeelings = ['Disregarded', 'Unimportant', 'Rejected', 'Powerless'];

    $scope.bad = badFeelings[Math.floor((Math.random() * 4))];
});

app2.controller('groceriesCtrl', function($scope) {
    var groceries = [ 
        { name: 'sauce', price: 2.99 },
        { name: 'plox', price: 9.22 },
        { name: 'cheezborgor', price: 7 }
    ];

    $scope.groceries = groceries;
});

// Returns different partial files based on a true or false value
app2.controller('partialController', function($scope) {
    $scope.randomVariable = 'asdf';
    $scope.getPartialFile = function() {
        // partial html files are literally just snippets of html, nothing else
        return $scope.isPartialTrue ? "partialTrue.html" : "partialFalse.html"
    }
});