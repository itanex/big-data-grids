(function() {
  'use strict';

  var module = angular.module("app.bigData");
  
  module.controller('LargeRecordController', LargeRecordController);

  /*
   *
   */
  LargeRecordController.$inject = ['$scope', 'BigDataService'];

  function LargeRecordController($scope, BigDataService) {

    // Scope Data
    $scope.largeRecordCount = null;
    $scope.largeRecords = [];

    // Scope Functions
    $scope.generateLarge = function() {
      if($scope.largeRecordCount > 1000) {
        $scope.largeRecordCount = 1000;
      }

      $scope.largeRecords = BigDataService.largeRecordSet($scope.largeRecordCount);
    };
  }
})();
