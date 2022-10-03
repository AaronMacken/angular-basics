var demoApp = angular.module('demoApp', []);

demoApp.controller('demoController', ($scope, $http) => {
    $scope.todos = [];

    $scope.fetchTodos = () => {
        if ($scope.todos.length) {
            alert('you already got data bro');

            return;
        }

        $http.get('https://jsonplaceholder.typicode.com/todos/').then(({ data }) => {
                data.slice(0,3).forEach(({ title, id }) => {
                    $scope.todos.push({ title, id });
            });
        });
    };

    $scope.deleteTodo = id => {
        const filteredTodos = $scope.todos.filter(todo => {
            return id !== todo.id;
        });

        $scope.todos = filteredTodos;
    }
});
