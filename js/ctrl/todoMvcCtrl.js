angular.module('todoApp').controller("todoCtrl", function ($scope) {

	$scope.todos = [{
		id: 1,
		title: 'NodeJs, AngularJs',
		completed: false
      }, {
		id: 2,
		title: 'Git 올리기',
		completed: true
      }];

	$scope.removeTodo = function (id) {
		if (!id) {
			return;
		}

		// 배열에서 제거할 인덱스를 검색
		var delTodoIndex = $scope.todos.findIndex(function (todo) {
			return todo.id === id;
		});

		if (delTodoIndex === -1) {
			return;
		}

		// 배열에서 제거
		$scope.todos.splice(delTodoIndex, 1);

	}

	$scope.addTodo = function (todoTitle) {
		todoTitle = todoTitle.trim();
		if (!todoTitle) {
			return;
		}

		var newId = !$scope.todos.length ? 1 : $scope.todos[$scope.todos.length - 1].id + 1;
		var newTodo = {
			id: newId,
			title: todoTitle,
			completed: false
		};

		$scope.todos.push(newTodo);
	};

	$scope.$watch('status', function () {
		if ($scope.status === 'completed') { // Completed 클릭시
			$scope.statusFilter = {
				completed: true
			}; // 필터를 설정한다.
		} else if ($scope.status === 'active') { // Active 클릭시
			$scope.statusFilter = {
				completed: false
			}; // 필터를 설정한다.
		} else { // All 클릭시
			$scope.statusFilter = {}; // 필터를 해제한다.
		}
	})



});