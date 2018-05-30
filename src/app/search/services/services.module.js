import WikipediaSearchService from './wikipedia-search/wikipedia-search.service';

export default angular.module('angular-sample-app.search.services', [])
    .service('wikipediaSearchService', WikipediaSearchService);
