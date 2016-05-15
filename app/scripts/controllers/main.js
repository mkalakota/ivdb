'use strict';
/* global ivdb */
/**
 * @ngdoc function
 * @name ivdbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ivdbApp
 */
ivdb.controller('MainCtrl', ['$scope', 'Video', 'Category', '$mdSidenav', '$mdDialog', function ($scope, Video, Category, $mdSidenav, $mdDialog) {
    $scope.categories = Category.query();

    $scope.showVideos = function (category) {
        $scope.noVideos = false;
        $scope.videos = Video.query({category: category});
        $scope.videos.$promise.catch(function (error) {
            $scope.noVideos = error.status === 404;
        });
    };

    $scope.showVideos('trending');

    var self = this;

    self.toggleSidenav = function () {
        $mdSidenav('categoriesList').toggle();
    };

    self.showUploadDialog = function (ev) {
        $mdDialog.show({
            controller: 'UploadController',
            templateUrl: 'views/upload.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
        })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };
}]);
