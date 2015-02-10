  'use strict';

angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    
	$scope.list1 = [];
	$scope.list2 = [];
	
$scope.signin = function(isValid){
		$scope.flag=1;
  if (isValid) {
  	         alert('amazing');
  	          $scope.list1.push(this.user.username);
  	          $scope.list2.push(this.user.password);
  	     }
  	     else{
		alert('Enter the Complete Details');
	}
	// $scope.signin = function(isValid){
	// 	$scope.flag=1;
	// if (isValid) {
      
 //      if($scope.user.username){

	// 		$scope.list1.push(this.user.username);
	// 	    $scope.user.username='';

	// 		}
	//   else{
	// 			$scope.flag=0;
	// 			alert('fill in user user name');
	// 		}
	
	//    if($scope.user.password)	{
	// 	$scope.list2.push(this.user.password);
	// 	$scope.user.password='';
	//         }
	//   else{
	// 	$scope.flag=0;
	// 	alert('fill in password');
	//     }
	//    if($scope.flag=1){
	// 	alert('amazing');
	//     }
	  
	};

		});