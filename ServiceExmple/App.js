// Module links your HTML page with your angular JS data layer
// This module will have `controllers`,
// which is how we link part of the HTML with the data
var demoApp = angular.module('demoApp', []);

demoApp.factory('todoService', () => {
    let todos = [];
    const addTodos = todoData => todoData.forEach(({title, id}) => todos.push({ title, id}));
    const getTodos = () => todos;

    const deleteTodo = id => {
        const filteredTodos = todos.filter(todo => {
            return id !== todo.id;
        });

        todos = filteredTodos;
        getTodos();
    }

    return {
        addTodos,
        getTodos,
        deleteTodo
    };
});

// $scope is the data that only exists in the controller it was defined in
// $rootScope makes data available in different controllers
// $http is angulars internal fetch system (using axios doesnt work well here)
demoApp.controller('jumboController', ($scope, $rootScope, $http, todoService) => {
    $scope.fetchTodos = () => {
        $http.get('https://jsonplaceholder.typicode.com/todos/').then(({ data }) => {
            todoService.addTodos(data.slice(0,3));
            $rootScope.$broadcast('GET_TODO', todoService.getTodos());
        });
    };
});

// ^ connected via `todoServie` v //


demoApp.controller('todoController', ($scope, $rootScope, todoService) => {
    $rootScope.$on('GET_TODO', () => {
        $scope.todos = todoService.getTodos();
    });

    $scope.deleteTodo = todoService.deleteTodo;
});