namespace BigDataGrids {
  angular
    .module('app', [
      // Third Party Modules
      'ngSanitize',
      'ui.grid', // Angular UI Grid
      'sf.virtualScroll', // vendor/sf-virtual-scroll.js

      // Application Modules
      'app.bigData', // My Application's Home Module
      'app.uiVirtualList', // Custom ui-virtual-list directive
    ]);
}
