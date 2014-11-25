// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute', 'slick']);

// configure our routes
myApp.config(function ($routeProvider, $compileProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/comic.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/toons', {
            templateUrl: 'pages/toon.html',
            controller: 'toonController'
        })

        // route for the about page
        .when('/news', {
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
myApp.controller('mainController', function ($scope, $timeout, $http) {

    $timeout(function(){
        // // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';

        $http.defaults.useXDomain = true;

        $scope.comics = [];

        $http.get('http://lolgh.spacebarweb.com/api/comics').
            success(function (data, status, headers, config) {
                $scope.comics = data;
                $scope.dataLoaded = true;
            }).
            error(function (data, status, headers, config) {
                // error msg
            });


    }, 2000);
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

myApp.controller('newsController', function ($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $http.defaults.useXDomain = true;

    $http.get('http://lolgh.spacebarweb.com/api/twitter').
        success(function (data, status, headers, config) {
            $scope.tweets = data;
        }).
        error(function (data, status, headers, config) {
            // error msg
        });
});

myApp.controller('contactController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});