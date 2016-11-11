(function() {
  'use strict';

  var module = angular.module('app.home');

  module.controller('HomeController', HomeController);

  /*
   *
   */
  HomeController.$inject = ['$scope', '$state', 'RecordService'];

  function HomeController($scope, $state, RecordService) {
    // Scope Data
    $scope.simpleRecordCount = null;
    $scope.simpleRecords = [];

    $scope.largeRecordCount = null;
    $scope.largeRecords = [];

    $scope.avsRecordCount = null;
    $scope.avsRecords = [];

    $scope.auigRecordCount = null;

    $scope.auigOptions = {
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      virtualizationThreshold: 20
      //fastWatch: true
    };

    // Scope Functions
    $scope.generateSimple = function() {
      if($scope.simpleRecordCount > 5000) {
        $scope.simpleRecordCount = 5000;
      }

      $scope.simpleRecords = RecordService.basicRecordSet($scope.simpleRecordCount);
    };

    $scope.generateLarge = function() {
      if($scope.largeRecordCount > 1000) {
        $scope.largeRecordCount = 1000;
      }

      $scope.largeRecords = RecordService.largeRecordSet($scope.largeRecordCount);
    };

    $scope.generateAvsRecords = function() {
      if($scope.avsRecordCount > 1000) {
        $scope.avsRecordCount = 1000;
      }

      $scope.avsRecords = RecordService.largeRecordSet($scope.avsRecordCount);
    };

    $scope.myVirtualRecordSelected = function(option) {
      console.log("Selected Record", option);
    }

    $scope.generateAuigRecords = function() {
      if($scope.auigRecordCount > 1000) {
        $scope.auigRecordCount = 1000;
      }

      $scope.auigOptions.data = RecordService.largeRecordSet($scope.auigRecordCount);
    };


    // Misc



  }
})();