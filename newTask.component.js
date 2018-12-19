(function () {
	angular.module('myTodoList').component('newTask',{
		templateUrl:'newTask.component.template.html',
		controller: newTaskController,
		bindings:{
			displayInputFlag:'<',
			addTask:'&'
		}
	});

	newTaskController.$inject = ['$timeout'];
	function newTaskController($timeout) {
		let ctrl = this;
		ctrl.tempInput = "";
		ctrl.displayInput = function() {
			// on click new task sudo link
			ctrl.displayInputFlag = true;
		}
		ctrl.addNewTask = function () {
			// on click add button
			if(ctrl.tempInput !== ""){
				ctrl.addTask({task:ctrl.tempInput});
				ctrl.tempInput = "";
			}else {
				ctrl.showAlert();
			}
		}
		ctrl.showAlert = function() {
			ctrl.showAlertFlag = true;
			$timeout(function(){
				ctrl.showAlertFlag = false;
			}, 2000);
		}
	}






	// body...
})();