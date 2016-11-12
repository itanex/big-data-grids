(function () {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('AuigRecordController', AuigRecordController);

  /*
   *
   */
  AuigRecordController.$inject = ['BigDataService'];

  function AuigRecordController(BigDataService) {
    var vm = this;

    vm.recordCount = null;

    vm.options = {
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      virtualizationThreshold: 20
        //fastWatch: true
    };

    vm.generateRecords = function () {
      if (vm.recordCount > 1000) {
        vm.recordCount = 1000;
      }

      vm.options.data = BigDataService.largeRecordSet(vm.recordCount);
    };
  }
})();