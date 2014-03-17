function RecordCtrl($scope, Session, Records, Expenses,SecureExp, Categories) {"use strict";

    $scope.user = Session.requestCurrentUser();
    $scope.records = Expenses.index();
    console.log(Expenses.index());
    //console.log(SecureExp.show({expense_id:1}));

    
	Records.create({data:"this is a test"});
    $scope.logout = function() {
        Session.logout();
    };
}

