(function () {
  var module = angular.module('app', [
    'app.common',           // My Application's Common Module
    'app.home',             // My Application's Home Module
    'ngSanitize',
    'ui.bootstrap',         // Angular UI Bootstrap
    'ui.grid',              // Angular UI Grid
    'sf.virtualScroll'      // vendor/sf-virtual-scroll.js
  ]);

  module.config(AppConfig);

  AppConfig.$inject = [];

  function AppConfig() { }
})();
