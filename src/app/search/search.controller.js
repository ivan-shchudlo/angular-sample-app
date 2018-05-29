export default class SearchController {
    constructor(wikipediaSearchService, searchResults, $state) {
        'ngInject';

        this.results = searchResults;
        this._wikipediaSearchService = wikipediaSearchService;
    }

    performSearch(searchText) {
        this._wikipediaSearchService.searchWikipedia(searchText)
            .then(results => {
                this.results = results;
            });
    }
}