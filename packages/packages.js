var app = angular.module("selfieApp");

app.controller("packagesController", ["$scope", function ($scope) {
    $scope.packageChoice = "";

    $scope.autoMessage = $scope.packageChoice += "Hi! I am interested in booking your standard package"
}])