namespace BigDataGrids {

  export class AuigRecordController {
    public recordCount: number = null;
    public options: uiGrid.IGridOptions = {
      enableFiltering: true,
      flatEntityAccess: true,
      showGridFooter: true,
      virtualizationThreshold: 20
      //fastWatch: true
    };

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

      this.options.data = this.BigDataService.largeRecordSet(this.recordCount);
    }
  }
}
