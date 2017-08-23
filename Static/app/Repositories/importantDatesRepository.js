(function(){
	'use strict';

	angular
	.module('app')
	.factory('importantDatesRepository', importantDatesRepository);

	importantDatesRepository.$inject = ['$http'];

	function importantDatesRepository($http){
		var service = {
            obtainImportantDates: obtainImportantDates,
            defaultDates:[
                {
                    title: "Math Exam",
                    startsAt: new Date("2017-08-16T12:00:00Z"),
                    endsAt: new Date("2017-08-16T14:00:00Z")
                }
            ]
		};

		return service;
		function obtainImportantDates(){
            return service.defaultDates;
			// return $http(
			// {
			// 	method: 'POST',
			// 	url: '',
			// 	data: info,
			// 	params: {

			// 	},
			// 	headers: {

			// 	}
			// }
			// )
			// .then(success)
			// .catch(error);
		}
		function success(response) {
			return response.data;
		}

		function error(error) {
			return error.data;
		}
	}
})();
