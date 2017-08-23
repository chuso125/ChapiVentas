(function(){
	'use strict';

	angular
	.module('app')
	.factory('productsRepository', productsRepository);

	productsRepository.$inject = ['$http'];

	function productsRepository($http){
		var service = {
            obtainAvailableProducts: obtainAvailableProducts,
            defaultProducts:[
                "pizza",
                "igo",
                "coffe"
            ]
		};

		return service;
		function obtainAvailableProducts(){
            return service.defaultProducts;
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
