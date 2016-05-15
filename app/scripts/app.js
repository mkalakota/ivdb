'use strict';

/**
 * @ngdoc overview
 * @name ivdbApp
 * @description
 * # ivdbApp
 *
 * Main module of the application.
 */
var ivdb = angular.module('ivdbApp', [
    'ngMaterial',
    'ngResource',
    'ngMockE2E'
]);

ivdb.run(['$httpBackend', '$resource', function ($httpBackend, $resource) {
    $httpBackend.whenGET(/api\/videos\?category=trending/).respond($resource('server/videos/trending.json').query());
    // pass through any request
    $httpBackend.whenGET(/.*/).passThrough();
}]);
