var app = angular.module("selfieApp");

app.controller("footerController", ["$scope", function ($scope) {

}])

app.directive("footer", function () {
    return {
        restrict: "A",
        templateUrl: "footer/footer.html"
    }
})