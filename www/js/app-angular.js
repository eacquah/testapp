// Create module
var app = angular.module('app', ['ngRoute']);

// Configure routes
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsController'
        })
        .when('/comics', {
            templateUrl: 'views/comic.html',
            controller: 'comicController'
        })
        .when('/toons', {
            templateUrl: 'views/toon.html',
            controller: 'toonController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        });
}]);

app.controller('mainController', function($scope) {
    // create message to display
    $scope.message = 'test';
});