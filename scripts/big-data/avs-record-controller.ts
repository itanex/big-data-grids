module BigDataGrids {

  class AvsRecordController {
    public recordCount: number = null;
    public records: Array<Record> = [];

    static $inject = ['BigDataService'];
    constructor(
      private BigDataService: BigDataService
    ) { }

    generateRecords() {
      if (this.recordCount > 5000) {
        this.recordCount = 5000;
      }

      this.records = this.BigDataService.largeRecordSet(this.recordCount);
    }
  }

  angular
    .module('app.bigData')
    .controller('AvsRecordController', AvsRecordController);
}
