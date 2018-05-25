import searchConfig from './search.config';
import directivesModule from './directives/directives.module';
import servicesModule from './services/services.module';

export default angular.module('angular-sample-app.search', [
    directivesModule.name,
    servicesModule.name,
]).config(searchConfig);