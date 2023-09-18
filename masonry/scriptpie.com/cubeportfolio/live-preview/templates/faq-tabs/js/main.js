(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-faq').cubeportfolio({
        filters: '#js-filters-faq',
        defaultFilter: '*',
        animationType: 'sequentially',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: 'expand',
        gapHorizontal: 0,
        gapVertical: 0,
    });
})(jQuery, window, document);

(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-tabs').cubeportfolio({
        filters: '#js-filters-tabs',
        defaultFilter: '.about',
        animationType: 'fadeOut',
        gridAdjustment: 'default',
        displayType: 'default',
        caption: '',
    });
})(jQuery, window, document);