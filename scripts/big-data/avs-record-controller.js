(function() {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('AvsRecordController', AvsRecordController);

  /*
   *
   */
  AvsRecordController.$inject = ['$scope', 'BigDataService'];

  function AvsRecordController($scope, BigDataService) {

    // Scope Data
    $scope.avsRecordCount = null;
    $scope.avsRecords = [];

    // Scope Functions
    $scope.generateAvsRecords = function() {
      if($scope.avsRecordCount > 1000) {
        $scope.avsRecordCount = 1000;
      }

      $scope.avsRecords = BigDataService.largeRecordSet($scope.avsRecordCount);
    };
  }
})();
