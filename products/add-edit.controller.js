(function () {
    'use strict';

    angular
        .module('app')
        .controller('Products.AddEditController', Controller);

    function Controller($scope, $state, $stateParams, ProductService) {
        var vm = {}

        vm.title = 'Add Product';
        vm.product = {};
        vm.saveProduct = saveProduct;

        initController();

        $scope.vm = vm

        function initController() {
            if ($stateParams.id) {
                vm.title = 'Edit Product';
                vm.product = ProductService.GetById($stateParams.id);
            }
        }

        function saveProduct() {
            // save product
            ProductService.Save(vm.product);

            // redirect to products view
            $state.go('products');

            // emit event so list controller can refresh
            window.events.emit('products-updated');
        }
    }

})();