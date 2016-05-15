/* global ivdb */
ivdb.controller('UploadController', ['$scope', '$mdDialog', 'Category', function ($scope, $mdDialog, Category) {
    $scope.categories = Category.query();
    $scope.video = {};

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function () {
        $mdDialog.hide($scope.video);
    };

}]);