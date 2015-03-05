  'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,$location,dataservice) {
  	$('.ui.rating')
  .rating({
    rating: 3,
    maxRating: 5
  })
;
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
	        	if (userData.status =='translator')
	        	{
	        		alert("Hi");
					$location.path('/trans');
	        	}
	        	

	        	if(userData.status =='admin')
	        	{
	        		alert("Hi Admin");
	        		$location.path('/admin');
	        	}
	        	if(userData.status =='Done')
	        	{
	        		
	        		$location.path('/home');
	        	}
	        	
	         
	        },
	        function (error) {
	          $scope.loginError = error;
	        }
	      );
	    } 
	    else {
	      $scope.loginError = 'Username and password required';
	    }

  };
  	$scope.vari1=localStorage.tk ;
 	if($scope.vari1 == 'undefined')
 		$scope.vari=true;
 	else
 		$scope.vari=false;
 $scope.logout = function() {
 		localStorage.tk = 'undefined';
 		window.location.reload();

 }
  
});