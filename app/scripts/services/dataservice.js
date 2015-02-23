'use strict';

angular.module('mytodoApp')
  .factory('dataservice', function ($location,$http,$q,$window) {
    var authenticatedauthor = null;
    var authortrans = null;
    var user = null;
    var authenticatedUser = null;
    var tk = null ;
    var accessData = null;
    var authors = null;
    var apiUrl = 'http://10.0.1.7:8081/';
    return {
         
        login: function(uo)
        {
          
          var json1 = JSON.stringify(uo);
          console.log(uo);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'login/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authenticatedUser = userData;
                    console.log(userData);
                    $window.localStorage.tk = userData.token;
                    console.log(accessData);
                    deferred.resolve(authenticatedUser);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },


        logout: function()
        {
          ao.tk = tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);

            var deferred = $q.defer();
            $http({
                method  : 'POST',
                url     : apiUrl+'logout/',
                data    : json1,
                headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'  }
            }).success(function(user)
              {
                authenticatedUser = null;
                deferred.resolve(user);
              }).error(function(error)
              {
                deferred.reject(error);
              });
              return deferred.promise;
        },

         contact: function(ao)
        {
          ao.tk =$window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'searchtrans/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authortrans = userData;
                    console.log(userData.trans_name);
                    deferred.resolve(authortrans);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
        fp: function(fo)
        {
          
          var json1 = JSON.stringify(fo);
          console.log(fo);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'forgotpass/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function() { 
                    deferred.resolve();

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
         addauthor: function(ao)
        {
          ao.token = $window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'adminaddtrans/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authenticatedauthor = userData;
                    console.log(userData.status);
                    deferred.resolve(authenticatedauthor);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
        blog: function(ao)
        {
          ao.token = $window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'comment/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authenticatedauthor = userData;
                    
                    console.log(authenticatedauthor);
                    deferred.resolve(authenticatedauthor);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },

        adduser: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'adminaddtrans/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authenticatedauthor = userData;
                    console.log(userData.status);
                    deferred.resolve(authenticatedauthor);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },

 
 
        author: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displayall/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
      
         rating: function(ao)
        {
          ao.token = $window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'rating/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authenticatedauthor = userData;
                    console.log(userData);
                    deferred.resolve(userData);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },


    }
    
});