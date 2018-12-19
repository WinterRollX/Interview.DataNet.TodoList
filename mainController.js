(function () {
	// myTodoList
	let myApp = angular.module("myTodoList",[]);
	myApp.controller("mainController",mainControllerFun);
	
	function mainControllerFun() {
		console.log("mainController online...");
		// mainController will hold all the data.
		
		let ctrl = this;
		ctrl.$onInit = ()=> {
			// check local storage type
			if(typeof(Storage) !== "undefined"){
				ctrl.loadContent();
			}
		}
		ctrl.tempInput = "";
		ctrl.todoListList = [
		{name:'test list name 1',displayInputFlag:false,taskList:[{name:'task 1'},{name:'task 2'},{name:'task 3'}]},
		{name:'test list name 2',displayInputFlag:false,taskList:[{name:'task 4'},{name:'task 5'},{name:'task 6'}]},
		{name:'test list name 3',displayInputFlag:false,taskList:[{name:'task 7'},{name:'task 8'},{name:'task 9'}]}
		];

		ctrl.onMoveTask = function (moveTask) {
			let taskIndex = moveTask['index'];
			let currentIndex = moveTask.listIndex;
			let targetIndex = 0;
			if(moveTask['direct'] === 0){
				targetIndex = currentIndex-1;
				if(targetIndex < 0){targetIndex = ctrl.todoListList.length-1;}
			}else {
				targetIndex = currentIndex+1;
				if(targetIndex >= ctrl.todoListList.length){targetIndex = 0;}
			}
			// move to its left neighber
			let tempTask = ctrl.todoListList[currentIndex].taskList.splice(taskIndex,1);
			ctrl.todoListList[targetIndex].taskList.push(tempTask[0]);
		}

		ctrl.onAddList = function () {
			if(ctrl.tempInput !== ""){
				let listName = ctrl.tempInput;
				let tempList = {};
				tempList.name = listName;
				tempList.displayInputFlag = false;
				tempList.taskList = [];
				ctrl.todoListList.push(tempList);
			}else {
				alert("List name can not be empty!");
			}
		}
		ctrl.saveContent = function () {
			
			if(typeof(Storage) !== "undefined"){
				let JSONData = JSON.stringify(ctrl.todoListList);
				localStorage.setItem("todoListData",JSONData);
				console.log("List data saved.");
			}
		}
		ctrl.loadContent = function () {
			let temp = localStorage.getItem("todoListData");
			if(temp !== null){
				ctrl.todoListList = JSON.parse(temp);
			}
			console.log("last saved list data loaded");
			
		}
		ctrl.clearData = function () {
			// clear local stroage
			localStorage.clear();
		}


	}

})();