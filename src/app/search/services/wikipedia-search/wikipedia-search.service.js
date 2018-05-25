const SEARCH_URL_TEMPLATE = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=100&origin=*&search=';

export default class WikipediaSearchService {
    constructor($http) {
        'ngInject';

        this._$http = $http;
    }

    searchWikipedia(searchText) {
        return this._$http.get(SEARCH_URL_TEMPLATE + searchText)
            .then(response => {
                const articleNames = response.data[1];
                const articleUrls = response.data[3];
                return _.map(articleNames, (name, index) => ({
                    name,
                    url: articleUrls[index],
                }));
            });
    }
}