'use strict';

/**
 * @ngdoc function
 * @name mhFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mhFrontApp
 */
angular.module('mhFrontApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
