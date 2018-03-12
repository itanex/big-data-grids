namespace BigDataGrids {

  export class LargeRecordController {
    public recordCount: number = null;
    public records: Array<Record> = [];

    static $inject = [
      'BigDataService'
    ];
    
    constructor(
      private BigDataService: BigDataService
    ) { }

    generateRecords() {
      if (this.recordCount > 1000) {
        this.recordCount = 1000;
      }

      this.records = this.BigDataService.largeRecordSet(this.recordCount);
    };
  }
}
