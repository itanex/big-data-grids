(function () {
  'use strict';

  var module = angular.module('app.common', []);

  module.directive('uiVirtualScroll', Directive);

  Directive.$inject = [];

  function Directive() {

    return {
      restrict: 'E',
      templateUrl: 'scripts/common/ui-virtual-list.html',
      scope: {
        uiDataProvider: '=',
        uiOnSelect: '&'
      },
      link: function (scope, elem, attrs, ngModelCtrl) {
        var rowHeight = 30;

        scope.height = 200;
        scope.scrollTop = 0;
        scope.visibleProvider = [];
        scope.cellsPerPage = 0;
        scope.numberOfCells = 0;
        scope.canvasHeight = {};

        // Init
        scope.init = function () {
          elem[0].addEventListener('scroll', scope.onScroll);
          scope.cellsPerPage = Math.round(scope.height / rowHeight);
          scope.numberOfCells = 3 * scope.cellsPerPage;
          scope.canvasHeight = {
            height: scope.uiDataProvider.length * rowHeight + 'px'
          };

          scope.updateDisplayList();
        };

        scope.updateDisplayList = function () {
          var firstCell = Math.max(Math.floor(scope.scrollTop / rowHeight) - scope.cellsPerPage, 0);
          var cellsToCreate = Math.min(firstCell + scope.numberOfCells, scope.numberOfCells);
          scope.visibleProvider = scope.uiDataProvider.slice(firstCell, firstCell + cellsToCreate);

          for (var i = 0; i < scope.visibleProvider.length; i++) {
            scope.visibleProvider[i].styles = {
              'top': ((firstCell + i) * rowHeight) + "px"
            }
          }
        };

        scope.onScroll = function (evt) {
          scope.scrollTop = elem.prop('scrollTop');
          scope.updateDisplayList();

          scope.$apply();
        };

        scope.onClickOption = function (option) {
          scope.currentOption = option;
          scope.uiOnSelect({
            "option": option
          });
        };

        scope.$watch('uiDataProvider', function () {
          scope.init();
        });

        scope.init();
      }
    };

  }
})();
