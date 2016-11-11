(function() {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('SimpleRecordController', SimpleRecordController);

  /*
   *
   */
  SimpleRecordController.$inject = ['$scope', 'BigDataService'];

  function SimpleRecordController($scope, BigDataService) {

    // Scope Data
    $scope.simpleRecordCount = null;
    $scope.simpleRecords = [];

    // Scope Functions
    $scope.generateSimple = function() {
      if($scope.simpleRecordCount > 5000) {
        $scope.simpleRecordCount = 5000;
      }

      $scope.simpleRecords = BigDataService.basicRecordSet($scope.simpleRecordCount);
    };
  }
})();
