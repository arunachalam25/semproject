'use strict';

angular.module('mytodoApp')
  .controller('author', function ($scope,$location,dataservice) {
  $('.ui.rating')
  .rating({
    rating: 3,
    maxRating: 5
  })

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
	  $scope.rate = function () {


	     
	      dataservice.rate().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection3 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };
	   $scope.rate1 = function () {


	     
	      dataservice.rate1().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection5 = userData;
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
	    ao.trans_from= $scope.trans_from;
	    ao.trans_to= $scope.trans_to;


	     if (ao) {
	      dataservice.rating(ao).then(
	        function (userData) {
	        	if (userData.status== 'voted')
	        	{
	        		alert("voted");
					
	        	}
	        	if (userData.status== 'notvote')
	        	{
	        		alert("already voted");
					
	        	}
	        }

	        );
	  }
	  };

          
	  
});