'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);



var mainApp = angular.module('mainApp', ['ngRoute', 'Authentication', 'Home', 'ngCookies']);



mainApp.config(function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: '/static/loginApp/login/login.html',
            hideMenus: true
        })

        .when('/home', {
            // controller: 'HomeController',
            templateUrl: '/static/loginApp/home/home.html'
    })
        .otherwise({redirectTo: '/login'
        });

})
    .run(['$rootScope', '$location', '$cookies',
        function ($rootScope, $location, $cookies) {
            // keep user logged in after page refresh
            $rootScope.globals = $cookies.get('globals') || {};
            if ($rootScope.globals.currentUser) {
                $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
            }

            $rootScope.$on('$locationChangeStart', function (event, next, current) {
                // redirect to login page if not logged in
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
            });
        }]);
