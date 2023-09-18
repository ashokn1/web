(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-agency').cubeportfolio({
        filters: '#js-filters-agency',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideLeft',
        gapHorizontal: 35,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 100,

        singlePageDelegate: null,
        plugins: {
            loadMore: {
                element: '#js-loadMore-agency',
                action: 'click',
                loadItems: 3,
            },
            sort: {
                element: '#js-sort-agency'
            }
        },
    });
})(jQuery, window, document);


(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-awesome-work').cubeportfolio({
        filters: '#js-filters-awesome-work',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'scaleSides',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        caption: 'zoom',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 10000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },

        plugins: {
            loadMore: {
                element: '#js-loadMore-awesome-work',
                action: 'click',
                loadItems: 3,
            }
        },
    });
})(jQuery, window, document);