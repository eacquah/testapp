// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute', 'slick']);

// configure our routes
myApp.config(function ($routeProvider, $compileProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/toons', {
            templateUrl: 'pages/toon.html',
            controller: 'toonController'
        })

        // route for the about page
        .when('/updates', {
            templateUrl: 'pages/news.html',
            controller: 'newsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/'
        });

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope, $http) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $http.defaults.useXDomain = true;

    $http.get('http://lolgh.spacebarweb.com/api/comics').
        success(function (data, status, headers, config) {
            //alert(data[0].toSource());
            $scope.comics = data;
        }).
        error(function (data, status, headers, config) {
            // error msg
        });
});

myApp.controller('toonController', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $http.defaults.useXDomain = true;

    $http.get('http://lolgh.spacebarweb.com/api/toons').
        success(function (data, status, headers, config) {
            $scope.newToon = data[0];
        }).
        error(function (data, status, headers, config) {
            // error msg
        });
});

myApp.controller('newsController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});