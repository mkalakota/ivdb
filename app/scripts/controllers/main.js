'use strict';

/**
 * @ngdoc function
 * @name ivdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ivdbApp
 */
ivdb.controller('MainCtrl', ['$scope', 'Video', function ($scope, Video) {
    $scope.trending = Video.query({category: 'trending'});
}]);
