export default class SearchBoxController {
    constructor($scope) {
        'ngInject';

        this._$scope = $scope;
    }

    search() {
        if (this.searchText && this.searchText.trim()) {
            this._$scope.onSearch({ searchText: this.searchText.trim() });
        }
    }

    clear() {
        this.searchText = '';
    }

    getText() {
        return 'asdasdsaa';
    }
}