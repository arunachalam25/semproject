'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
  .module('mytodoApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'adduser'
      })
       .when('/editpro', {
        templateUrl: 'views/editpro.html',
        controller: 'pro'
      })
      .when('/home', {
        templateUrl: 'views/contact.html',
        controller: 'contact'
      })
      .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'aboutus'
      })
      
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'admin'
      })
       .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'contactus'
      })
       .when('/trans', {
        templateUrl: 'views/trans.html',
        controller: 'trans'
      })
      .when('/fp', {
        templateUrl: 'views/fp.html',
        controller: 'fp'
      })
      .when('/addauthor', {
        templateUrl: 'views/addauthor.html',
        controller: 'addauthor'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'blog'
      })
      .when('/rating', {
        templateUrl: 'views/rating.html',
        controller: 'author'
      })
      // .when('/signup', {
      //   templateUrl: 'views/signup.html',
      //   controller: 'adduser'
      // })s
       .when('/signup1', {
        templateUrl: 'views/signup1.html',
        controller: 'adduser'
      })
       .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'edit'
      })
       .when('/del', {
        templateUrl: 'views/del.html',
        controller: 'delete'
      })
       .when('/edituser', {
        templateUrl: 'views/edituser.html',
        controller: 'edit1'
      })
       .when('/deluser', {
        templateUrl: 'views/deluser.html',
        controller: 'delete1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
