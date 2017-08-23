(function() {
    'use strict';

    angular
        .module('app')
        .controller('reportsController', reportsController);

    reportsController.$inject = ["$scope", "$rootScope"];
    function reportsController($scope, $rootScope) {
        var vm = this;
        
        vm.$onInit = onInit;

        function onInit() { 

        }
    }
})();