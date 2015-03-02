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
	        	//obj = JSON.parse(userData);


	        	$scope.collection2 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  $scope.author = function () {


	     
	      dataservice.author().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

  $scope.blog1 = function () {
  		
	    
	      dataservice.blog1().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection1 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  
  
});