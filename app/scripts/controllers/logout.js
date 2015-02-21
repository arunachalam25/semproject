'use strict';

angular.module('mytodoApp')
  .controller('logout', function ($scope,$location,dataservice) {
  	$scope.logout = function () {
  		var ao = {};
  	    
	    
	    
	      dataservice.logout(ao).then(
	        function (authortrans) {
	        	$scope.collection = [authortrans];
	        	
	        	
	         },
	        
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    
  };
});
  