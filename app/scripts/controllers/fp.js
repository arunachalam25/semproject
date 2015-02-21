 'use strict';

angular.module('mytodoApp')
  .controller('fp', function ($scope,$location,dataservice) {
  	$scope.fp = function () {
  		var fo = {};
  	    
	    fo.email = $scope.email;
	   

	    if (fo) {
	      dataservice.fp(fo).then(
	        function () {
	        	alert("Check Your MaiL");
	            $location.path('/main');
	         
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