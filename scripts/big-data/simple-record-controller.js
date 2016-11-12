(function() {
  'use strict';

  var module = angular.module("app.bigData");

  module.controller('SimpleRecordController', SimpleRecordController);

  /*
   *
   */
  SimpleRecordController.$inject = ['BigDataService'];

  function SimpleRecordController(BigDataService) {
    var vm = this;

    vm.recordCount = null;
    vm.records = [];

    vm.generateRecords = function() {
      if(vm.recordCount > 5000) {
        vm.recordCount = 5000;
      }

      vm.records = BigDataService.basicRecordSet(vm.recordCount);
    };
  }
})();
