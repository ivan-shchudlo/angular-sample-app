import template from './search.tpl.html';
import SearchController from './search.controller';

export default function config($stateProvider) {
    'ngInject';

    $stateProvider.state('angular-sample-app.search', {
        template,
        controller: SearchController,
        controllerAs: '$ctrl',
        url: '/search/{searchString}',
        resolve: {
            searchResults: function($transition$, wikipediaSearchService, $timeout) {
                if ($transition$.params().searchString) {
                    return $timeout(()=> {}, 2000).then(() => {
                        return wikipediaSearchService.searchWikipedia($transition$.params().searchString)
                    });
                }
                return null;
            },
        }
    });
}
