(function() {
    'use strict';

    angular
        .module('app')
        .controller('calendarController', calendarController);

    calendarController.$inject = [
                                'calendarConfig',
                                'productsRepository',
                                'importantDatesRepository',
                                "$scope", 
                                "$rootScope"
                                ];
    function calendarController( calendarConfig, productsRepository, importantDatesRepository, $scope, $rootScope) {
        var vm = this;
           vm.calendarView = 'month';
        vm.viewDate = new Date();
        var actions = [{
                label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
                onClick: function(args) {
                    alert.show('Edited', args.calendarEvent);
                }
            }, {
                label: '<i class=\'glyphicon glyphicon-remove\'></i>',
                onClick: function(args) {
                    alert.show('Deleted', args.calendarEvent);
                }
            }];
        vm.events = [
            {
                title: 'An event',
                color: calendarConfig.colorTypes.warning,
                startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
                endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
                draggable: true,
                resizable: true,
                actions: actions,
                editable: true
            }, {
                title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
                color: calendarConfig.colorTypes.info,
                startsAt: moment().subtract(1, 'day').toDate(),
                endsAt: moment().add(5, 'days').toDate(),
                draggable: true,
                resizable: true,
                actions: actions,
                editable: true
            }, {
                title: 'This is a really long event title that occurs on every year',
                color: calendarConfig.colorTypes.important,
                startsAt: moment().startOf('day').add(7, 'hours').toDate(),
                endsAt: moment().startOf('day').add(19, 'hours').toDate(),
                recursOn: 'year',
                draggable: true,
                resizable: true,
                actions: actions,
                editable: true
            }
        ];

        vm.products = productsRepository.obtainAvailableProducts();

        importantDatesRepository.obtainImportantDates().forEach(function(element) {
            vm.events.push({
                title: element.title,
                startsAt: element.startsAt,
                endsAt: element.endsAt,
                color: {
                    primary: "#ebdb23",
                    secondary: "#ebdb23"
                },
                draggable: true,
                resizable: true,
                editable: false
            })
        }, this);

        vm.cellIsOpen = true;

        vm.addEvent = function() {
            vm.events.push({
                title: 'New event',
                startsAt: moment().startOf('day').toDate(),
                endsAt: moment().endOf('day').toDate(),
                color: {
                    primary: "#f0f5f0",
                    secondary: "#f0f5f0"
                },
                draggable: true,
                resizable: true
            });
        };

        vm.eventClicked = function(event) {
        alert.show('Clicked', event);
        };

        vm.eventEdited = function(event) {
        alert.show('Edited', event);
        };

        vm.eventDeleted = function(event) {
        alert.show('Deleted', event);
        };

        vm.eventTimesChanged = function(event) {
        alert.show('Dropped or resized', event);
        };

        vm.toggle = function($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };

        vm.timespanClicked = function(date, cell) {

        if (vm.calendarView === 'month') {
            if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
            vm.cellIsOpen = false;
            } else {
            vm.cellIsOpen = true;
            vm.viewDate = date;
            }
        } else if (vm.calendarView === 'year') {
            if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
            vm.cellIsOpen = false;
            } else {
            vm.cellIsOpen = true;
            vm.viewDate = date;
            }
        }

        };
    }
})();