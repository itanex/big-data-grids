namespace BigDataGrids {

  export class AvsRecordController {
    public recordCount: number = null;
    public records: Array<Record> = [];

    static $inject = [
      'BigDataService'
    ];
    
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
}
