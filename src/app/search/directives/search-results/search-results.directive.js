import template from './search-results.tpl.html';
import SearchResultsController from './search-results.controller';

export default {
        controller: SearchResultsController,
        controllerAs: '$ctrl',
        bindings: {
            list: '<',
        },
        template,
    };

