import template from './search-results.tpl.html';
import SearchResultsController from './search-results.controller';

export default function searchResults() {
    return {
        bindToController: true,
        controller: SearchResultsController,
        controllerAs: '$ctrl',
        scope: {
            list: '<',
        },
        template,
    };
}
