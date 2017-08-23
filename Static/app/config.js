(function() {
    "use strict";

    angular
        .module("app")
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    function config($stateProvider, $locationProvider, $urlRouterProvider) {
        var home = {
            name: 'home',
            url: '/',
            templateUrl: '/Static/Views/home.html',
            controller: 'homeController',
            controllerAs: 'vmHome'
        };

        var report = {
            name: 'report',
            url: '/report',
            templateUrl: '/Static/Views/report.html',
            controller: 'reportsController',
            controllerAs: 'vmReport'
        };

        var calendar = {
            name: 'calendar',
            url: '/calendar',
            templateUrl: '/Static/Views/calendar.html',
            controller: 'calendarController',
            controllerAs: 'calendarCtrl'
        };

        $stateProvider.state(home);
        $stateProvider.state(report);
        $stateProvider.state(calendar);

        $urlRouterProvider.otherwise('/');
        //$locationProvider.html5Mode(true);
    }
})();