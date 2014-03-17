angular.module('categoryService', ['ngResource'])
    .factory('Categories', function($resource) {
        return $resource('/api/category.json', {}, {
            index: { method: 'GET', isArray: true},
            create: { method: 'POST' }
        });
    })
    .factory('SecureCat', function($resource){
        return $resource('/api/category/:category_id.json', {}, {
            show: { method: 'GET' },
            update: { method: 'PUT' },
            destroy: { method: 'DELETE' }
        });
    });