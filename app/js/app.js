'use strict';

/* App Module */
/*
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
*/
//---------------------------------------------------------------------------------

var debtApp = angular.module('debtApp',[
  'ngRoute',
  'debtListControllers',
  'debtListServices'
]);

debtApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/friends', {
        templateUrl: 'partials/debt-list.html',
        controller: 'BalanceCtrl'
      }).
      when('/friends/:friendId', {
        templateUrl: 'partials/freind-detail.html',
        controller: 'FriendDetailCtrl'
      }).
      otherwise({
        redirectTo: '/friends'
      });
  }]);