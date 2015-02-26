  'use strict';

angular.module('mytodoApp')
  .controller('contact', function ($scope,$location,dataservice) {
  	$scope.contact = function () {
  		var ao = {};
  	    
	    ao.from = $scope.from;
	    ao.to = $scope.to;

	    if (ao) {
	      dataservice.contact(ao).then(
	        function (authortrans) {
	        	$scope.collection = authortrans;
	        	
	        	
	         
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } else {
	      $scope.contactError = 'Username and password required';
	    }
  };
  
});