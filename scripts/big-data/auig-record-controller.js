(function () {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('AuigRecordController', AuigRecordController);

  /*
   *
   */
  AuigRecordController.$inject = ['$scope', 'BigDataService'];

  function AuigRecordController($scope, BigDataService) {

    // Scope Data
    $scope.auigRecordCount = null;

    $scope.auigOptions = {
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      virtualizationThreshold: 20
        //fastWatch: true
    };

    // Scope Functions
    $scope.generateAuigRecords = function () {
      if ($scope.auigRecordCount > 1000) {
        $scope.auigRecordCount = 1000;
      }

      $scope.auigOptions.data = BigDataService.largeRecordSet($scope.auigRecordCount);
    };
  }
})();