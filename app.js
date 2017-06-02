var app = angular.module("selfieApp", ["ngRoute"]);

app.controller("selfieController", ["$scope", function ($scope) {

}])

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeController"
        })
        .when("/packages", {
            templateUrl: "packages/packages.html",
            controller: "packagesController"
        })
        .when("/contact", {
            templateUrl: "contact/contact.html",
            controller: "contactController"
        })
        .otherwise({
            redirectTo: "/home"
        })
}])