'use strict';

angular.module('mytodoApp')
  .controller('delete1', function ($scope,$location,dataservice) {
  	

  	$scope.deleteuser = function () {


	     
	      dataservice.deleteuser().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

	 $scope.remove1 = function () {
  		
	   console.log($scope.collection1[0]); 
	    if ($scope.collection1[0]) {
	      dataservice.remove1($scope.collection1[0]).then(
	        function (userData) {
	        	if(userData.status =='removed')
	        	{
	        		alert("Removed Successfully");
	        		$location.path('/admin');
	        	}
	        	
	        }
	        );
	        }	
	         
	        },
    $scope.delete1 = function () {
    	var ao = {};
	    ao.username = $scope.username;
	  

	     if (ao) {
	      dataservice.delete1(ao).then(
	        function (userData) {
	        	
	        		$scope.collection1 = userData;
					
	        	
	        }

	        );
	  }
	  };

          
	  
});