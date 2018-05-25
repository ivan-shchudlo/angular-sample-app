import SearchBoxController from './search-box.controller';
import template from './search-box.tpl.html';

export default function searchBox() {
    return {
        controller: SearchBoxController,
        controllerAs: '$ctrl',
        scope: {
            onSearch: '&',
        },
        template,
    };
}
