'use strict';

angular.module('mytodoApp')
  .controller('trans', function ($scope,$location,dataservice) {
  	

  	$scope.transdet = function () {
			var ao = {};

	     
	      dataservice.transdet(ao).then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection1 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  },

	 $scope.save2 = function (entry) {
  	
	   console.log($scope.collection1[0]); 
	    if ($scope.collection1[0]) {
	      dataservice.save2($scope.collection1[0]).then(
	        function (userData) {
	        	if(userData.status =='Done')
	        	{
	        		alert("Edited Successfully you cant remain here");
	        		$location.path('/');
	        	}
	        	
	        }
	        );
	        }	
	         
	        };
    
	 

          
	  
});