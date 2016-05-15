/* global ivdb */
ivdb.factory('Video', ['$resource', function ($resource) {
    'use strict';
    return $resource('api/videos/:videoId', {
        videoId: '@id'
    }, {
        category: {
            method: 'GET',
            params: {category: '@category'}
        }
    });
}]);