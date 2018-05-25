import 'angular';
import 'angular-ui-router';
import 'lodash';

import '../sass/application.scss';

import homeModule from './home/home.module';
import aboutModule from './about/about.module';
import searchModule from './search/search.module';
import appConfig from './app.config';
import appRun from './app.run';

const requiredModules = [
    'ui.router',
    homeModule.name,
    aboutModule.name,
    searchModule.name,
];

export default angular.module('angular-sample-app', requiredModules)
    .config(appConfig)
    .run(appRun);
