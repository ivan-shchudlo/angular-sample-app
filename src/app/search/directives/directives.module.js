import searchBox from './search-box/search-box.directive';
import searchResults from './search-results/search-results.directive';
import redColorDirective from './red-color.directive';
import logScopeDirective from './log-scope.directive';

export default angular.module('angular-sample-app.search.directives', [])
    .directive('searchBox', searchBox)
    .component('searchResults', searchResults)
    .directive('redColor', redColorDirective)
    .directive('logScope', logScopeDirective);