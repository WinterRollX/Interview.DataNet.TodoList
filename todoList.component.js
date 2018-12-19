(function () {
	// todoList components and controller functions
	angular.module('myTodoList').component('todoList',{
		templateUrl:'todoList.component.template.html',
		controller: todoListController,
		bindings:{
			listProp: '<',
			onMove:'&',
			listIndex:'<'
		},
	});

	function todoListController() {
		// todoList controller hold the task list data and related functions.
		let ctrl = this;
		ctrl.testString = "I am testString of a todoList";
		ctrl.taskList = [];
		ctrl.$onInit=()=>{ctrl.taskList = ctrl.listProp.taskList;};


		ctrl.addTask = function (task) {
			// add Task to task List
			ctrl.taskList.push({name:task});
		}
		ctrl.onMoveRight = function (task_index) {
			// move a task to next neighber
			let moveReport = {};
			moveReport["index"] = task_index;
			moveReport["direct"] = 1;
			moveReport["listIndex"] = ctrl.listIndex;
			ctrl.onMove({moveTask:moveReport});
		}
		ctrl.onMoveLeft = function (task_index) {
			// move a task to left neighber
			let moveReport = {};
			moveReport["index"] = task_index;
			moveReport["direct"] = 0;
			moveReport["listIndex"] = ctrl.listIndex;
			ctrl.onMove({moveTask:moveReport});
		}


	}
})();