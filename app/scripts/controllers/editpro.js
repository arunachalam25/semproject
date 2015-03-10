'use strict';

angular.module('mytodoApp')
  .controller('pro', function ($scope,$location,dataservice) {
    
     $scope.v=false;
    $scope.pass = function () {
      $scope.v= true;
       
        
    },
    $scope.savepass1 = function () {
      var ao = {};
      
      ao.password = $scope.password;

      if (ao) {
        dataservice.savepass(ao).then(
          function (userData) {
       
            if(userData.status =='Done')
            {
              alert('password Changed');
              $location.path('/home');
            }
            
           
          },
          function (error) {
            $scope.loginError = error;
          }
        );
      } 
      else {
        $scope.loginError = ' password required';
      }

  };
    $scope.details5 = function () {
      var ao = {};

       
        dataservice.userdet(ao).then(
          function (userData) {
            //obj = JSON.parse(userData);


            $scope.collection1 = userData;
          },
          function (error) {
            $scope.contactError = error;
          }
        );
    },

    
    
   $scope.save5 = function (entry) {
    
     console.log($scope.collection1[0]); 
      if ($scope.collection1[0]) {
        dataservice.save5($scope.collection1[0]).then(
          function (userData) {
            if(userData.status =='Done')
            {
              alert("Edited Successfully");
              $location.path('/home');
            }
            
          }
          );
          } 
           
          };
    
   

          
    
});