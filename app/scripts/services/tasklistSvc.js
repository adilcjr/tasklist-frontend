angular.module('tasklist').factory('TasklistSvc', function($http) {

	var _authentication = function (login) {

		var parameters = JSON.stringify({email: login.email, password: login.password});
		
		return $http.post("http://localhost:8080/tasklist/user/auth", parameters);
	};

	var _tasks = function (id) {
		return $http.get("http://localhost:8080/tasklist/user/"+ id +"/tasks");
	};

	return {
		authentication: _authentication,
		tasks: _tasks
	};
});