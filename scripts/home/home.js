(function () {
  'use strict';

  var module = angular.module('app.home', [
    'ui.router'
  ]);

  module.config(HomeConfig);

  HomeConfig.$inject = ['$stateProvider'];

  function HomeConfig($stateProvider) {

    $stateProvider
      .state('Home', {
        url: '/',
        views: {
          'main': {
            controller: 'HomeController',
            templateUrl: 'scripts/home/home.html'
          }
        },
        resolve: {},
        data: {
          pageTitle: 'Home'
        }
      });
  }
})();
