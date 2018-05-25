import template from './home.tpl.html';
import HomeController from './home.controller';

export default function config($stateProvider) {
    'ngInject';

    $stateProvider.state('angular-sample-app.home', {
        template,
        controller: HomeController,
        url: '/home'
    });
}
