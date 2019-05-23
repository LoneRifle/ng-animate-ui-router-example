(function () {
    'use strict';

    angular
        .module('app')
        .controller('Products.MainController', Controller);

    function Controller($scope, ProductService) {
        var list = {};

        list.products = [];
        list.deleteProduct = deleteProduct;

        $scope.list = list

        initController();

        function initController() {
            loadProducts();

            // reload products when updated
            window.events.on('products-updated', () => {
                loadProducts()
                $scope.$digest()
            });
        }

        function loadProducts() {
            list.products = ProductService.GetAll();
        }

        function deleteProduct(id) {
            ProductService.Delete(id);
            loadProducts();
        }
    }

})();