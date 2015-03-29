'use strict';

angular.module('mytodoApp')
  .controller('translator', function ($scope,$location,dataservice) {
  	 
  	 $scope.v=false;
  
  	$scope.trans1 = function () {
  		var ao = {};
  		$scope.v= true;
  	    var obj;
	    ao.from = $scope.from;
	    ao.to = $scope.to;
	    ao.text = $scope.text;

	    if (ao) {
	      dataservice.trans1(ao).then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.text1 = userData.text1;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
 }); 