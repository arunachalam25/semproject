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
    var user = null;
    var trans = null;
    var id = null;
     var apiUrl = 'http://anirudhram.pythonanywhere.com/';
    //var apiUrl = 'http://10.0.1.35:8081/';
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
                    $window.localStorage.trans = userData.transname;
                    $window.localStorage.status1 = userData.status1;

                     window.location.reload();

                    console.log(accessData);
                    console.log($window.localStorage.trans);
                    deferred.resolve(authenticatedUser);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },


        // logout: function()
        // {
        //   ao.tk = tk;
        //   var json1 = JSON.stringify(ao);
        //   console.log(ao);

        //     var deferred = $q.defer();
        //     $http({
        //         method  : 'POST',
        //         url     : apiUrl+'logout/',
        //         data    : json1,
        //         headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'  }
        //     }).success(function(user)
        //       {
        //         authenticatedUser = null;
        //         deferred.resolve(user);
        //       }).error(function(error)
        //       {
        //         deferred.reject(error);
        //       });
        //       return deferred.promise;
        // },

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
                    console.log(userData);
                    deferred.resolve(authortrans);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
         transdet: function(ao)
        {
          ao.transname =$window.localStorage.trans;
          var json1 = JSON.stringify(ao);
          console.log(ao.transname);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'edittransfortrans/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authortrans = userData;
                    console.log(userData);
                    deferred.resolve(userData);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
        savepass: function(ao)
        {
          ao.username =$window.localStorage.trans;
          var json1 = JSON.stringify(ao);
          console.log(ao.transname);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'changepassword/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authortrans = userData;
                    console.log(userData);
                    deferred.resolve(userData);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
        savepass1: function(ao)
        {
          ao.username =$window.localStorage.trans;
          var json1 = JSON.stringify(ao);
          console.log(ao.transname);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'changepassword/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authortrans = userData;
                    console.log(userData);
                    deferred.resolve(userData);

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
      
          save: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'savetrans/',
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
        save1: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'saveuser/',
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
        save2: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log("hello");
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'savetransfortrans/',
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
         save5: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log("hello");
          console.log(ao);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'saveuserdet/',
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
                  url     : apiUrl+'signup/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    user = userData;
                    console.log(userData.status);
                    deferred.resolve(userData);

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
              url:  apiUrl+'displayname/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
     //  rate: function () 
     //    {
     //       var deferred = $q.defer();

     //     $http({
     //          method: 'Get',
     //          url:  apiUrl+'displaylang/',
     //      }).success(function (userData) {
     //          authors = userData;
     //          console.log(userData);
     //          deferred.resolve(authors);

     //      }).error(function (error) {
     //        deferred.error(error);
           
     //       });
     //      return deferred.promise;
     // },
      rate: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displayfrom/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
     rate1: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displayto/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
        edittrans: function () 
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
         trans: function () 
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
     details: function () 
        {
            
           var deferred = $q.defer();


         $http({
              method: 'Get',
              url:  apiUrl+'displayall/',
          }).success(function (userData) {
            //    var ao = {};
            // ao.authors = userData;
            // ao.transname = $window.localStorage.trans;
            // var json1 = JSON.stringify(ao);

            //userData.push({"transname":$window.localStorage.trans});
              // userData.transname=transname;
              console.log(userData);
              // console.log(ao.transname);
              deferred.resolve(userData);

              authors = userData;
              console.log(userData);
              deferred.resolve(userData);


          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
     userdet: function(ao)
        {
          ao.username =$window.localStorage.trans;
          ao.status =$window.localStorage.status1;
          var json1 = JSON.stringify(ao);
          console.log(ao.username);
            var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'edituserdet/',
                  data    : json1,
                  headers : { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' }
              }).success(function(userData) {
                    authortrans = userData;
                    console.log(userData);
                    deferred.resolve(userData);

              }).error(function(error) {
                    deferred.error(error);
              });
              return deferred.promise;
        },
     details1: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displaycomments/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(userData);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
      blog1: function () 
        {
           ao.token = $window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
            var deferred = $q.defer();

           

         $http({
              method: 'Get',
              url:  apiUrl+'comment/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(userData);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
      deletetrans: function () 
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
     deleteuser: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displayuser/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
     edituser: function () 
        {
           var deferred = $q.defer();

         $http({
              method: 'Get',
              url:  apiUrl+'displayuser/',
          }).success(function (userData) {
              authors = userData;
              console.log(userData);
              deferred.resolve(authors);

          }).error(function (error) {
            deferred.error(error);
           
           });
          return deferred.promise;
     },
     remove: function(ao)
        {
          
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'adminremovetrans/',
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
        remove1: function(ao)
        {
          
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'adminremoveuser/',
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
        edit: function(ao)
        {
         
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'edittrans/',
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

         edit1: function(ao)
        {
          
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'displayuser/',
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
         delete: function(ao)
        {
          
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'edittrans/',
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
         delete1: function(ao)
        {
          
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'displayuser/',
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
      
      
      
         rating: function(ao)
        {
          ao.token = $window.localStorage.tk;
          var json1 = JSON.stringify(ao);
          console.log(ao);
          var deferred = $q.defer();

            $http({
                  method  : 'POST',
                  url     : apiUrl+'rating2/',
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