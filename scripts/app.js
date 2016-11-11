(function () {
  var module = angular.module('app', [
    'app.common',           // My Application's Common Module
    'app.home',             // My Application's Home Module
    'ui.router',            // Angular UI Router
    'ui.bootstrap',         // Angular UI Bootstrap
    'ui.grid',              // Angular UI Grid
    'sf.virtualScroll'      // vendor/sf-virtual-scroll.js
  ]);

  module.config(AppConfig);
  module.run(AppRun);
  module.controller('AppController', AppController);

  /*
   *
   */
  AppConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

  function AppConfig($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider
      .otherwise('/');
  }

  /*
   *
   */
  AppRun.$inject = ['$state'];

  function AppRun($state) {
    // Implement any startup code

  }

  /*
   *
   */
  AppController.$inject = [];

  function AppController() { }
})();
