'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

var debtListServices = angular.module('debtListServices', ['ngResource']);

debtListServices.factory('Friend', ['$resource',
  function($resource){
  	return $resource('friends/:friendId.json', {}, {
  	  query: {method:'GET', params:{friendId:'friends-a'}, isArray:true, cache:false}
  	});
  }]);