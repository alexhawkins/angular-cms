'use strict';

/* global app:true */
/* exported app */

var app = angular
  .module('wafflePress', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://wafflepress.firebaseio.com/')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      });
  });
