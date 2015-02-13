'use strict';
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope) {
    
	$scope.list1 = [];
	$scope.list2 = [];
	$scope.list3 = [];
	$scope.list4 = [];

	

$scope.submitForm = function(isValid,$http){
		$scope.flag=1;
  if (isValid) {
  	 



  	         alert('amazing');
  	         $scope.list1.push(this.user.username);
             
             $scope.list2.push(this.user.password);
             $scope.list3.push(this.user.userno);
             $scope.list4.push(this.user.email);
             $http.get('http://192.168.1.5:8081/signup1/''username=' + this.user.name + '&password=' + this.user.password + '&phonenumber=' + this.user.userno + '&email='+this.user.emailid).success(function(data) {
 $scope.record = data;
 });
//             var u = JSON.stringify($scope.list1);
//             data = {'username':'asdfgh','password':'asdadsadasdfsad','phonenumber':'1234567890','email':'asd@asd.com'} 
// $.post('http://10.0.1.37:8080/signup/', {{data}});
//   	     }
  	     else{
		alert('Enter the Complete Details');
	}


	
	};

		});