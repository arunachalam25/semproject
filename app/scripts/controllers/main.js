  'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,$location,dataservice) {
  	$scope.login = function () {
  		var uo = {};
	    uo.username = $scope.userName;
	    uo.password = $scope.userPass;

	    if (uo) {
	      dataservice.login(uo).then(
	        function (userData) {
	        	if (userData.status =='wrong')
	        	{
	        		alert("Invalid Login");
					$location.path('/main');
	        	}
	        	if(userData.status =='admin')
	        	{
	        		alert("Hi Admin");
	        		$location.path('/admin');
	        	}
	        	else{
	        		 $location.path('/contact');
	        	}
	         
	        },
	        function (error) {
	          $scope.loginError = error;
	        }
	      );
	    } else {
	      $scope.loginError = 'Username and password required';
	    }
  };
  
});