'use strict';

angular.module('mytodoApp')
  .controller('addauthor', function ($scope,$location,dataservice) {
  	$scope.addauthor = function () {
  		var ao = {};
  	    ao.trans_name = $scope.name;
  	    ao.trans_address = $scope.address;
  	    ao.trans_email = $scope.email;
  	    ao.trans_number = $scope.phonenumber;
	    ao.trans_from = $scope.from;
	    ao.trans_to = $scope.to;

	    if (ao) {
	      dataservice.addauthor(ao).then(
	        function (userData) {
	        	if(userData.status =='Done')
	        	{
	        		alert("Added Successfully");
	        		$location.path('/admin');
	        	}
	        	else{
	        		alert("Already Registered");
	        		$location.path('/addauthor');
	        		
	        	}
	        	
	        	
	         
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  
  
});