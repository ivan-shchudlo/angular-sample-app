import template from './app.tpl.html';

export default function config(
    $locationProvider,
    $stateProvider,
    $urlRouterProvider,
) {
    'ngInject';

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode(true);

    $stateProvider.state('angular-sample-app', {
        name: 'app',
        abstract: true,
        template,
        url: '',
    });
}
