angular.module('app')
    .controller('TodoController', TodoController);

function TodoController() {
    var vm = this;

    vm.sortField = " ";

    vm.todos = [

    ];
    vm.priorities = [
        { name: 'High', number: 3, style: 'list-group-item-danger'},
        { name: 'Medium', number: 2, style: 'list-group-item-warning'},
        { name: 'low', number: 1, style: 'list-group-item-success'}
    ];
    vm.click = function click() {
        vm.todos.push(vm.newTodo);
        vm.newTodo = {};
        console.log(vm.newTodo);
    }

}
