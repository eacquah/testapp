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

myApp.directive('slickSlider', function ($http) {
    $http.defaults.useXDomain = true;
    return {
        // Restrict it to be an attribute in this case.
        restrict: 'A',
        link: function ($scope, element, attrs) {
            $http.get('http://lolgh.spacebarweb.com/api/comics').success(function (data) {
                $scope.comics = data;

                $scope.$watch('comics', function () {
                    $(element).slick({
                        dots: false,
                        autoplay: false,
                        arrows: true,
                        lazyLoad: "ondemand",
                        infinite: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                        //centerMode: true
                        //adaptiveHeight: true
                        //centerPadding: "60px"
                        //fade: true
                        //rtl: true
                    });
                });
            });
        }
    }
});

// create the controller and inject Angular's $scope
myApp.controller('mainController', function ($scope, $timeout, $http) {

    /*$timeout(function(){
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


    }, 2000);*/

    $scope.comicDir = 'http://lolgh.com/cms/content/lol_gh/';
    $scope.comicStemUrl = 'http://lolgh.com/comic/';
    $scope.facebookShare = function(title, img, url) {
        window.plugins.socialsharing.shareViaFacebook(title, img, url);
    };
    $scope.twitterShare = function(title, img, url) {
        window.plugins.socialsharing.shareViaTwitter(title, img, url);
    };
    $scope.generalShare = function(title, img, url) {
        window.plugins.socialsharing.share(title, img, url);
    };
});

myApp.controller('toonController', function ($scope, $http, $sce) {
    $http.defaults.useXDomain = true;

    $http.get('http://lolgh.spacebarweb.com/api/toons').
        success(function (data, status, headers, config) {
            $scope.newToon = data[0];
            $scope.newToon.fullUrl =  $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + $scope.newToon.url + "?enablejsapi=1&rel=0&showinfo=0&controls=0");
            $scope.toonStemUrl = 'http://lolgh.com/toon/';
            $scope.toonImage = 'http://img.youtube.com/vi/' + $scope.newToon.url + '/mqdefault.jpg';
        }).
        error(function (data, status, headers, config) {
            // error msg
        });


    $scope.facebookShare = function(title, img, url) {
        window.plugins.socialsharing.shareViaFacebook(title, img, url);
    };
    $scope.twitterShare = function(title, img, url) {
        window.plugins.socialsharing.shareViaTwitter(title, img, url);
    };
    $scope.generalShare = function(title, img, url) {
        window.plugins.socialsharing.share(title, img, url);
    };
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