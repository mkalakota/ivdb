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
    'pascalprecht.translate',
    'ngMockE2E'
]);

ivdb.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: 'scripts/i18n/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('en_US');
    $translateProvider.useSanitizeValueStrategy('escape');
}]);

ivdb.run(['$httpBackend', '$resource', function ($httpBackend, $resource) {
    $httpBackend.whenGET(/api\/videos\?category=trending/).respond($resource('server/videos/trending.json').query());
    $httpBackend.whenGET(/api\/videos\?category=educational/).respond($resource('server/videos/educational.json').query());
    $httpBackend.whenGET(/api\/categories/).respond($resource('server/categories.json').query());
    // pass through any request
    $httpBackend.whenGET(/.*/).passThrough();
}]);
