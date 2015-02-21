 'use strict';

angular.module('mytodoApp')
  .controller('blog', function ($scope,$location,dataservice) {
  	$scope.blog = function () {
  		var ao = {};
  	    var obj;
	    ao.name = $scope.name;
	    ao.comment = $scope.comment;

	    if (ao) {
	      dataservice.blog(ao).then(
	        function (userData) {
	        	obj = JSON.parse(userData);


	        	$scope.collection = obj;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  
});