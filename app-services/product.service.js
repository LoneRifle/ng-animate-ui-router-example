import store from '../components/store'

(function () {
    'use strict';

    angular
        .module('app')
        .factory('ProductService', Service);

    function Service($filter) {

        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.Save = Save;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return store.state.products.products
        }

        function GetById(id) {
            return store.getters['products/byId'](id)
        }

        function Save(product) {
            return store.commit('products/save', product)
        }

        function Delete(id) {
            return store.commit('products/delete', id)
        }

    }
})();