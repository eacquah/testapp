// create the module and name it scotchApp
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/toons', {
            templateUrl : 'pages/toon.html',
            controller  : 'toonController'
        })

        // route for the about page
        .when('/updates', {
            templateUrl : 'pages/news.html',
            controller  : 'newsController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })

        .otherwise({
            redirectTo: '/'
        });
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope, $http) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    $http.defaults.useXDomain = true;

    var comics = $http({
        method: 'GET',
        url: 'http://lolgh.spacebarweb.com/api/comics/'
    });

    console.log(JSON.stringify(comics));

    $scope.comics = comics;
});

myApp.controller('toonController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('newsController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});