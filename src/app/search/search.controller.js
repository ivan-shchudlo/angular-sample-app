export default class SearchController {
    constructor(wikipediaSearchService) {
        'ngInject';

        this._wikipediaSearchService = wikipediaSearchService;
    }

    performSearch(searchText) {
        this._wikipediaSearchService.searchWikipedia(searchText)
            .then(results => {
                this.results = results;
            });
    }
}