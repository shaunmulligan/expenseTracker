angular.module('expenseService', ['ngResource'])
    .factory('Expenses', function($resource) {
        return $resource('/api/expense.json', {}, {
            index: { method: 'GET', isArray: true},
            create: { method: 'POST' }
        });
    })
    .factory('Secure', function($resource){
        return $resource('/api/expense/:expense_id.json', {}, {
            show: { method: 'GET' },
            update: { method: 'PUT' },
            destroy: { method: 'DELETE' }
        });
    });