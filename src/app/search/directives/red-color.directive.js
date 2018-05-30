export default function redColorDirective($http) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element[0].addEventListener('click', () => {
                scope.$apply(() => {
                    scope.color = scope.color ? '' : 'red';
                });
            });
        },
    };
}