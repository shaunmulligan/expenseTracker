//= require ratchet.modified
//= require jquery.min
//= require suggest.min
//= require angular
//= require bootstrap.min
//= require angular-strap.min
//= require angular-resource
//= require angular-route.min.js

//= require_self

//= require services/sessionService
//= require services/recordService
//= require controllers/app
//= require controllers/record
//= require controllers/users

//= require Models/CategoriesModel
//= require Models/ExpensesModel
//= require Models/GoalsModel
//= require Models/GoalsModel
//= require Models/CurrenciesModel

//= require controllers/CategoriesController
//= require controllers/ExpensesController
//= require controllers/GoalsController
//= require controllers/FeedController
//= require controllers/OverviewController
//= require controllers/SettingsController

//= require jquery.knob.js
//= require chart.js
//= require hideTitleBar.js

//= require_tree

var expenseTrackerAppModule = angular.module('expenseTracker', ['sessionService','recordService','expenseService','$strap.directives']);

expenseTrackerAppModule.config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        var interceptor = ['$location', '$rootScope', '$q', function($location, $rootScope, $q) {
            function success(response) {
                return response
            };

            function error(response) {
                if (response.status == 401) {
                    $rootScope.$broadcast('event:unauthorized');
                    $location.path('/users/login');
                    return response;
                };
                return $q.reject(response);
            };

            return function(promise) {
                return promise.then(success, error);
            };
        }];
        $httpProvider.responseInterceptors.push(interceptor);
  }])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {templateUrl:'/record/index.html', controller:RecordCtrl})
      .when('/record', {templateUrl:'/record/index.html', controller:RecordCtrl})
      .when('/users/login', {templateUrl:'/users/login.html', controller:UsersCtrl})
      .when('/users/register', {templateUrl:'/users/register.html', controller:UsersCtrl})
      .when('/expenses/add', {templateUrl: 'partials/expense/expense-add.html', controller: 'expenseTracker.ExpensesController'})
      .when('/expenses/add/category', {templateUrl: 'partials/expense/expense-add-category.html', controller: 'expenseTracker.ExpensesController'})
      .when('/expenses/add/details', {templateUrl: 'partials/expense/expense-add-details.html', controller: 'expenseTracker.ExpensesController'})
      .when('/expenses/remove/:id', {templateUrl: 'partials/expense/expense-add.html', controller: 'expenseTracker.ExpensesController'})

      .when('/feed', {templateUrl: 'partials/feed/feed.html', controller: 'expenseTracker.FeedController'})
      .when('/feed/detail/:id', {templateUrl: 'partials/feed/feed-detail.html', controller: 'expenseTracker.FeedController'})

      .when('/overview', {templateUrl: 'partials/overview/overview.html', controller: 'expenseTracker.OverviewController'})
      .when('/settings', {templateUrl: 'partials/settings/settings.html', controller: 'expenseTracker.SettingsController'})
  
      .when('/overview/weekly', {templateUrl: 'partials/overview/overview-weekly.html', controller: 'expenseTracker.OverviewController'})

      .when('/categories', {templateUrl: 'partials/categories/categories.html', controller: 'expenseTracker.CategoriesController'})
      .when('/categories/add', {templateUrl: 'partials/categories/categories-add.html', controller: 'expenseTracker.CategoriesController'})
  
      .when('/goals', {templateUrl: 'partials/goals/goals.html', controller: 'expenseTracker.GoalsController'})
      .when('/goals/add', {templateUrl: 'partials/goals/goals-add.html', controller: 'expenseTracker.GoalsController'})

      .when('/settings/budget', {templateUrl: 'partials/settings/budget.html', controller: 'expenseTracker.SettingsController'})
      .when('/settings/change-currency', {templateUrl: 'partials/settings/change-currency.html', controller: 'expenseTracker.SettingsController'})
      .when('/settings/maximum-per-spending', {templateUrl: 'partials/settings/maximum-per-spending.html', controller: 'expenseTracker.SettingsController'})
  
  // root path
      //.otherwise({redirectTo: '/expenses/add'});
  }]);

