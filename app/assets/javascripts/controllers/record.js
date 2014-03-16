function RecordCtrl($scope, Session, Records, Expenses) {"use strict";

    $scope.user = Session.requestCurrentUser();
    $scope.records = Expenses.index();
    console.log($scope.user)
    console.log(Expenses.index());

    $scope.logout = function() {
        Session.logout();
    };
}

