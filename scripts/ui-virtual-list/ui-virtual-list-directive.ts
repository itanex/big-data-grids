namespace BigDataGrids {

  interface UiVirtualListScope extends ng.IScope {
    height: number;
    scrollTop: number;
    visibleProvider: Array<any>;
    cellsPerPage: number;
    numberOfCells: number;
    canvasHeight: any;

    currentOption: any;
    uiDataProvider: any;

    onScroll(event: any): void;
    onClickOption(option: any): void;
    uiOnSelect(data: any): void;

    init(): void;
    updateDisplayList(): void;
  }

  export class UiVirtualListDirective implements ng.IDirective {
    public restrict: string = "E";
    public replace: boolean = true;
    public templateUrl: string = 'scripts/common/ui-virtual-list.html';
    public controller: string = 'CustomerSearchCtrl';
    public controllerAs: string = 'Ctrl';
    public scope: any = {
      uiDataProvider: '=',
      uiOnSelect: '&'
    };

    constructor() { }

    link = (scope: UiVirtualListScope, elem: JQuery, attributes: ng.IAttributes, ngModel: ng.INgModelController) => {

      var rowHeight = 30;

      scope.height = 200;
      scope.scrollTop = 0;
      scope.visibleProvider = [];
      scope.cellsPerPage = 0;
      scope.numberOfCells = 0;
      scope.canvasHeight = {};

      // Init
      scope.init = () => {
        elem[0].addEventListener('scroll', scope.onScroll);
        scope.cellsPerPage = Math.round(scope.height / rowHeight);
        scope.numberOfCells = 3 * scope.cellsPerPage;
        scope.canvasHeight = {
          height: scope.uiDataProvider.length * rowHeight + 'px'
        };

        scope.updateDisplayList();
      };

      scope.updateDisplayList = () => {
        var firstCell = Math.max(Math.floor(scope.scrollTop / rowHeight) - scope.cellsPerPage, 0);
        var cellsToCreate = Math.min(firstCell + scope.numberOfCells, scope.numberOfCells);
        scope.visibleProvider = scope.uiDataProvider.slice(firstCell, firstCell + cellsToCreate);

        for (var i = 0; i < scope.visibleProvider.length; i++) {
          scope.visibleProvider[i].styles = {
            'top': ((firstCell + i) * rowHeight) + "px"
          }
        }
      };

      scope.onScroll = (evt) => {
        scope.scrollTop = elem.prop('scrollTop');
        scope.updateDisplayList();

        scope.$apply();
      };

      scope.onClickOption = (option) => {
        scope.currentOption = option;
        scope.uiOnSelect({
          "option": option
        });
      };

      scope.$watch('uiDataProvider', () => {
        scope.init();
      });

      scope.init();
    }
  }
}