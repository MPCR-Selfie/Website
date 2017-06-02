var app = angular.module("selfieApp");

app.controller("navbarController", ["$scope", function ($scope) {

}])

app.directive("navbar", function () {
    return {
        restrict: "E",
        templateUrl: "navbar/navbar.html"
    }
})