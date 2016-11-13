module BigDataGrids {

  class SimpleRecordController {
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

      this.records = this.BigDataService.basicRecordSet(this.recordCount);
    }
  }

  angular
    .module('app.bigData')
    .controller('SimpleRecordController', SimpleRecordController);
}
