export default function redColorDirective() {
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