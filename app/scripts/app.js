'use strict';

/**
 * @author Derek Argueta
 * @ngdoc overview
 * @name mountainhacks
 * @description
 * # mountainhacks
 *
 * Main module of the application.
 */
angular
  .module('mountainhacks', [
    'ngResource',
    'ngRoute',
    'restangular'
  ])

  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  }])

  .config(['$routeProvider', 'RestangularProvider', function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      RestangularProvider.setBaseUrl('http://....');
  }]);
