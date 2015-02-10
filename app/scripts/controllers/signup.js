'use strict';
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope) {
    
	$scope.list1 = [];
	$scope.list2 = [];
	$scope.list3 = [];
	$scope.list4 = [];
	$scope.list5 = [];
	

$scope.submitForm = function(isValid){
		$scope.flag=1;
  if (isValid) {
  	         alert('amazing');
  	         $scope.list1.push(this.user.username);
             $scope.list2.push(this.user.name);
             $scope.list3.push(this.user.password);
             $scope.list4.push(this.user.userno);
             $scope.list5.push(this.user.email);
  	     }
  	     else{
		alert('Enter the Complete Details');
	}

//       if($scope.user.username){

// 			$scope.list1.push(this.user.username);


// 	}
// // 		else{
// // 				$scope.flag=0;
// // 				alert('fill in user user name');
// // 			}
//        if($scope.user.name){

// 			$scope.list2.push(this.user.name);
// // 		    $scope.user.name= '';

// 		}
// // 		else{
// // 				$scope.flag=0;
// // 				alert('fill in name');
// // 			}
//        if($scope.user.password){

// 			$scope.list3.push(this.user.password);
// // 		    $scope.user.password= '';

// 		}
// // 		else{
// // 				$scope.flag=0;
// // 				alert('fill in password');
// // 			}
//        if($scope.user.userno){

// 			$scope.list4.push(this.user.userno);
// // 		    $scope.user.userno= '';

// 		}
// // 	    else{
// // 				$scope.flag=0;
// // 				alert('fill in mobile number');
// // 		}
//        if($scope.user.email)	{
// 		$scope.list5.push(this.user.email);
// // 		$scope.user.email= '';
// 	     }
// // 	   else{
// // 		$scope.flag=0;
// 		alert('fill in email');
// 	     }
// 
		
	
	
	
	};

		});