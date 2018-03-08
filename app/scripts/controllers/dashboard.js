'use strict';

/**
 * @ngdoc function
 * @name tasklist.controller:DashboardCtrl
 * @description
 * # DashCtrl
 * Controller of Task List
 */
angular.module('tasklist')
  .controller('DashboardCtrl', function($scope, $state, $stateParams, TasklistSvc) {
    $scope.$state = $state;
    var id = $stateParams.id;
    console.log(">>> id: " + id);

    var loadTasks = function (id) {

		TasklistSvc.tasks(id).success(function (data, status) {
			$scope.tasks = data;
			console.log(data);
		}).error(function (data, status) {
			$scope.message = "Aconteceu um problema: " + status;
		});
	}

    /*$scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
        if (item.data && item.data.visible) {
            $scope.menuItems.push({name: item.name, text: item.data.text});
        }
    });*/

    loadTasks(id);
  });
