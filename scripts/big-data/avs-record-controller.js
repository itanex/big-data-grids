(function() {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('AvsRecordController', AvsRecordController);

  /*
   *
   */
  AvsRecordController.$inject = ['BigDataService'];

  function AvsRecordController(BigDataService) {
    var vm = this;

    vm.recordCount = null;
    vm.records = [];

    vm.generateRecords = function() {
      if(vm.recordCount > 1000) {
        vm.recordCount = 1000;
      }

      vm.records = BigDataService.largeRecordSet(vm.recordCount);
    };
  }
})();
