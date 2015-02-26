'use strict';

angular.module('mytodoApp')
  .controller('edit1', function ($scope,$location,dataservice) {
  	

  	$scope.edituser = function () {


	     
	      dataservice.edituser().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

	 $scope.save1 = function (entry) {
  		
	   console.log($scope.collection1[0]); 
	    if ($scope.collection1[0]) {
	      dataservice.save1($scope.collection1[0]).then(
	        function (userData) {
	        	if(userData.status =='Done')
	        	{
	        		alert("Edited Successfully");
	        		$location.path('/admin');
	        	}
	        	
	        }
	        );
	        }	
	         
	        },
    $scope.edit1 = function () {
    	var ao = {};
	    ao.username = $scope.username;
	  

	     if (ao) {
	      dataservice.edit1(ao).then(
	        function (userData) {
	        	
	        		$scope.collection1 = userData;
					
	        	
	        }

	        );
	  }
	  };

          
	  
});