namespace BigDataGrids {
  let module = angular.module('app.uiVirtualList', []);

  module.directive('uiVirtualScroll', [() => new UiVirtualListDirective()]);
}
