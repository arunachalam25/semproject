'use strict';

angular.module('mytodoApp')
  .controller('adduser', function ($scope,$location,dataservice) {
  	$scope.adduser = function () {
  		var ao = {};
  	    ao.username = $scope.userName;
  	    ao.password = $scope.userPass;
  	    ao.phonenumber = $scope.userno;
  	    ao.email = $scope.email;
	    
	    if (ao) {
	      dataservice.adduser(ao).then(
	        function (userData) {
	        	if(userData.status =='Done')
	        	{
	        		alert("Added Successfully");
	        		$location.path('/admin');
	        	}
	        	if(userData.status =='usernameexists')
	        	{
	        		alert("this user name already exists select another");
	        		$location.path('/signup');
	        	}
	        	if(userData.status =='emailexists')
	        	{
	        		alert("This EmailId Aleardy Registered ");
	        		$location.path('/signup');
	        	}
	        	if(userData.status =='phone')
	        	{
	        		alert("This Mobile Number Already Registered ");
	        		$location.path('/signup');
	        	}
	        	
	         
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  		$scope.adduser1 = function () {
  		var ao = {};
  	    ao.username = $scope.userName;
  	    ao.password = $scope.userPass;
  	    ao.phonenumber = $scope.userno;
  	    ao.email = $scope.email;
	    
	    if (ao) {
	      dataservice.adduser(ao).then(
	        function (userData) {
	        	if(userData.status =='Done')
	        	{
	        		alert("Added Successfully");
	        		$location.path('/main');
	        	}
	        	if(userData.status =='usernameexists')
	        	{
	        		alert("this user name already exists select another");
	        		$location.path('/signup');
	        	}
	        	if(userData.status =='emailexists')
	        	{
	        		alert("This EmailId Aleardy Registered ");
	        		$location.path('/signup');
	        	}
	        	if(userData.status =='phone')
	        	{
	        		alert("This Mobile Number Already Registered ");
	        		$location.path('/signup');
	        	}
	        	
	         
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  
});

    
  // $scope.list1 = [];
  // $scope.list2 = [];
  // $scope.list3 = [];
  // $scope.list4 = [];


//       $scope.flag=1;
//   if (isValid) {
     



//              alert('amazing');
//              $scope.list1.push(this.user.username);
             
//              $scope.list2.push(this.user.password);
//              $scope.list3.push(this.user.userno);
//              $scope.list4.push(this.user.email);
//  //             $http.get('http://192.168.1.5:8081/signup1/''username=' + this.user.username + '&password=' + this.user.password + '&phonenumber=' + this.user.userno + '&email='+this.user.emailid).success(function(data) {
//  // $scope.record = data;
//  // });
// //             var u = JSON.stringify($scope.list1);
// //             data = {'username':'asdfgh','password':'asdadsadasdfsad','phonenumber':'1234567890','email':'asd@asd.com'} 
// // $.post('http://10.0.1.37:8080/signup/', {{data}});
// //         }
// var http = new XMLHttpRequest();
// var url = "http://10.0.1.7:8081/signup/";
// //var username="aad";
// var str1="{username:this.user.username,password:this.user.password,phonenumber:this.user.userno,email:this.user.email}";
// //var str = "{ hello: 'world', places: ['Africa', 'America', 'Asia', 'Australia'] }";
// //var json = JSON.stringify(eval("(" + str + ")"));
// var json1 = JSON.stringify(eval("(" + str1 + ")"));

// //var obj=JSON.parse(username);
// //var params = "username=sss&password=binny";
// //var params=obj;
// http.open("POST", url, true);

// //Send the proper header information along with the request
// http.setRequestHeader("Content-type", "application/json");
// //http.setRequestHeader("Content-length", params.length);
// http.setRequestHeader("Access-Control-Allow-Origin","*")
// //http.setRequestHeader("Connection", "close");

// http.onreadystatechange = function() {//Call a function when the state changes.
//     if(http.readyState == 4 && http.status == 200) {
//         alert(http.responseText);
//     }
// }

// http.send(json1);
// }


//          else{
//     alert('Enter the Complete Details');
//   }

