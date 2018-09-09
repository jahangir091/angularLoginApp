



mainApp = angular.module('mainApp', []);



mainApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'login/login.html',
            hideMenus: true
        })

        .when('/', {
            controller: 'HomeController',
            templateUrl: 'home/home.html'
    })
        .otherwise({redirectTo: '/login'});

}])