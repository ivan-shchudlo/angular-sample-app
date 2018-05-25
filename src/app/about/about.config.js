import template from './about.tpl.html';
import AboutController from './about.controller';

export default function config($stateProvider) {
    'ngInject';

    $stateProvider.state('angular-sample-app.about', {
        template,
        controller: AboutController,
        url: '/about'
    });
}
