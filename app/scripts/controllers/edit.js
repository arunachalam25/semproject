'use strict';

angular.module('mytodoApp')
  .controller('edit', function ($scope,$location,dataservice) {
  	

  	$scope.edittrans = function () {


	     
	      dataservice.edittrans().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

	 $scope.save = function (entry) {
  		// ao.trans_name = $scope.trans_name;
  	 //    ao.trans_address = $scope.trans_address;
  	  
  	 //    ao.trans_number = $scope.trans_number;
	   //  ao.trans_from = $scope.trans_from;
	   //  ao.trans_to = $scope.trans_to;
	   console.log($scope.collection1[0]); 
	    if ($scope.collection1[0]) {
	      dataservice.save($scope.collection1[0]).then(
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
    $scope.edit = function () {
    	var ao = {};
	    ao.transname = $scope.authorname;
	  

	     if (ao) {
	      dataservice.edit(ao).then(
	        function (userData) {
	        	
	        		$scope.collection1 = userData;
					
	        	
	        }

	        );
	  }
	  };

          
	  
});