(function () {
    'use strict';

    angular
        .module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap'])
        .run(run)
        .run(($browser) => {
            $browser.url = function (url) {
                if (url) {
                    // setter is now a noop
                    return $browser
                } else {
                    // getter always returns ''
                    return ''
                }
            }
        })

    function run(ProductService) {
        // add some initial products
        if (ProductService.GetAll().length === 0) {
            ProductService.Save({ name: 'Boardies', price: '25.00' });
            ProductService.Save({ name: 'Singlet', price: '9.50' });
            ProductService.Save({ name: 'Thongs (Flip Flops)', price: '12.95' });
        }
    }

})();