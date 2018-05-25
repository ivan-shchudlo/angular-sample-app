import template from './search.tpl.html';
import SearchController from './search.controller';

export default function config($stateProvider) {
    'ngInject';

    $stateProvider.state('angular-sample-app.search', {
        template,
        controller: SearchController,
        controllerAs: '$ctrl',
        url: '/search'
    });
}
