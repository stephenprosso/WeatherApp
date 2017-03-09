angular.module('app', []);
angular.module('app')
    .controller('homeController', homeController);

function homeController() {
    var vm = this;

    vm.todos = [

    ];
    vm.priorities = [
        "low",
        "medium",
        "hi"
    ];
    vm.click = function click() {
        vm.newObject = { "name": vm.NewTodo, "priority": vm.selectedPriority};
        vm.todos.push(vm.newObject);
        vm.NewTodo = " ";
        console.log(vm.newObject);
    }

}
