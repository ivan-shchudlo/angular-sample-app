export default class AppController {
    constructor($transitions, $state) {
        'ngInject';

        $transitions.onStart({}, () => {
            this.isLoading = true;
        });

        $transitions.onFinish({}, () => {
            this.isLoading = false;
        });
    }
}