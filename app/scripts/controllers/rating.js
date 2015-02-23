'use strict';

angular.module('mytodoApp')
  .controller('author', function ($scope,$location,dataservice) {
  	$scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

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

    $scope.rating = function () {
    	var ao = {};
	    ao.transname = $scope.authorname;
	    ao.rating= $scope.star;


	     if (ao) {
	      dataservice.rating(ao).then(
	        function (userData) {
	        	if (userData)
	        	{
	        		alert("voted");
					
	        	}
	        }

	        );
	  };

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
	        	
	      };
	         
	  
});