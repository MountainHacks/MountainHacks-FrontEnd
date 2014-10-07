'use strict';

/**
 * @ngdoc function
 * @name mhFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mhFrontApp
 */
angular.module('mhFrontApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
