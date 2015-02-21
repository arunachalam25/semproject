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
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contact'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'admin'
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
      .otherwise({
        redirectTo: '/'
      });
  });
