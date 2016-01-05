'use strict';

/* Controllers */
/*
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
*/

//---------------------------------------------------------------------------------

var debtListControllers = angular.module('debtListControllers', []);

debtListControllers.controller('BalanceCtrl', ['$scope', 'Friend',
  function ($scope, Friend){
    $scope.friends = Friend.query();
    $scope.orderProp = 'id'
  }]);

debtListControllers.controller('FriendDetailCtrl', ['$scope', '$routeParams', 'Friend',
  function ($scope, $routeParams, Friend) {
    $scope.friend = Friend.get({friendId: $routeParams.friendId}, function  (friend) {
      $scope.mainImageUrl = friend.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl =imageUrl;
    };
  }]);