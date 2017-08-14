
var app = angular.module('mainApp', ['ngRoute']);   

    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            // route for the individual profile page of each ad
            .when('/ad/:id', {
                templateUrl : 'views/ad.html',
                controller  : 'ProfileCtrl'
            })

            .otherwise({
            	redirectTo : '/'
            });
    });