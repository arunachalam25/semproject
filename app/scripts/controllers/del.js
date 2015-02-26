'use strict';

angular.module('mytodoApp')
  .controller('delete', function ($scope,$location,dataservice) {
  	

  	$scope.deletetrans = function () {


	     
	      dataservice.deletetrans().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

	 $scope.remove = function () {
  		
	   console.log($scope.collection1[0]); 
	    if ($scope.collection1[0]) {
	      dataservice.remove($scope.collection1[0]).then(
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
    $scope.delete = function () {
    	var ao = {};
	    ao.transname = $scope.authorname;
	  

	     if (ao) {
	      dataservice.delete(ao).then(
	        function (userData) {
	        	
	        		$scope.collection1 = userData;
					
	        	
	        }

	        );
	  }
	  };

          
	  
});