export default function logScopeDirective() {
    return {
        link(scope) {
            console.log(scope);
        }
    }
}