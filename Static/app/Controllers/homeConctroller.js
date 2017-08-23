(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = [
        '$scope'
    ];

    function homeController($scope) {
        var vm = this;
        
        vm.$onInit = onInit;

        function onInit() { 

        }
    }
})();