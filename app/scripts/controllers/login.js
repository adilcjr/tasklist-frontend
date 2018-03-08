'use strict';

/**
 * @ngdoc function
 * @name tasklist.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of tasklist
 */
angular.module('tasklist')
  .controller('LoginCtrl', function($scope, $http, $location, TasklistSvc) {
  	
  	$scope.message = "";

    $scope.submit = function(login) {			
		
		TasklistSvc.authentication(login).success(function (data) {
			
			$location.path('/dashboard/' + data.id);
		}).error(function (data, status) {
			$scope.message = "Usuário ou senha inválida. (" + status + ")";
		});
	};

  });
