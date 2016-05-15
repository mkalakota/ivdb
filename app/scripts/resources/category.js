/* global ivdb */
ivdb.factory('Category', ['$resource', function ($resource) {
    'use strict';
    return $resource('api/categories/:categoryId', {
        categoryId: '@id'
    });
}]);