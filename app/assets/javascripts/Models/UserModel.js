//UserModel Object constructor
var expenseTrackerAppModule = angular.module('expenseTracker');
expenseTrackerAppModule.service('UserModel', function () {
	'use strict';

	var currentUser = {
		firstName : '',
		lastName : '',
		eMailAddress : '',
		budget : 0.0,
		token : '',
		currency: 2
	};

	return {

		getCurrentUser : function() {
			return currentUser;
		},

		/* Getter and Setter */

		getFirstName : function () {
			return currentUser.firstName;
		},
		
		setFirstName : function (value) {
			currentUser.firstName = value;
		},

		getLastName : function () {
			return currentUser.lastName;
		},
		
		setLastName : function (value) {
			currentUser.lastName = value;
		},
		
		getEMailAddress : function () {
			return currentUser.eMailAddress;
		},
		
		setEMailAddress : function (value) {
			currentUser.eMailAddress = value;
		},

		getBudget : function () {
			return currentUser.budget;
		},
		
		setBudget : function (value) {
			currentUser.budget = value;
		},
		
		getGoals : function () {
			// Goal Model
			
			//return goals;
		},
		
		setGoals : function (model) {
			// Goal Model
			
			//return goals;
		},
		
		getExpenses : function () {
			// Expenses Model
			
			//return expenses;
		},
		
		setExpenses : function (model) {
			// Expenses Model
			
			//return expenses;
		},

		getCurrency : function () {
			return currentUser.currency;
		},
		
		setCurrency : function (currencyId) {
			currentUser.currency = currencyId;
		}
	};
});