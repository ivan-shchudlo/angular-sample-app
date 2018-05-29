export default class HomeController {
    constructor($state) {
        this._$state = $state;
    }

    goToSearch() {
        this._$state.go('angular-sample-app.search', { searchString: 'bla' });
    }
}