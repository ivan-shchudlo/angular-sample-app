import 'angular';
import 'angular-ui-router';
import 'lodash';
import 'angular-material';
import 'angular-animate';
import 'angular-aria';
import '../sass/application.scss';
import '../../node_modules/angular-material/angular-material.scss';

import homeModule from './home/home.module';
import aboutModule from './about/about.module';
import searchModule from './search/search.module';
import appConfig from './app.config';
import appRun from './app.run';

const requiredModules = [
    'ui.router',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    homeModule.name,
    aboutModule.name,
    searchModule.name,
];

export default angular.module('angular-sample-app', requiredModules)
    .config(appConfig)
    .run(appRun);
