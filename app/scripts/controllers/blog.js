 'use strict';

angular.module('mytodoApp')
  .controller('blog', function ($scope,$location,dataservice) {
  	$scope.v=false;
$scope.details = function () {


	     
	      dataservice.details1().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection3 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };
  	$scope.blog = function () {
  		var ao = {};
  		$scope.v= true;
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

	  }
});

 
	       
  
  
