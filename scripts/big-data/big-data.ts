namespace BigDataGrids {
  let module = angular.module('app.bigData', []);

  module.service('BigDataService', BigDataService);

  module.controller('AvsRecordController', AvsRecordController);
  module.controller('AuigRecordController', AuigRecordController);
  module.controller('LargeRecordController', LargeRecordController);
  module.controller('SimpleRecordController', SimpleRecordController);
}
