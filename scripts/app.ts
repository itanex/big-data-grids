module BigDataGrids {
  angular
    .module('app', [
      'app.bigData', // My Application's Home Module
      'app.uiVirtualList', // Custom ui-virtual-list directive
      'ngSanitize',
      'ui.grid', // Angular UI Grid
      'sf.virtualScroll' // vendor/sf-virtual-scroll.js
    ]);
}
