'use strict';


angular.module('Authentication')

.controller('LoginController', function ($scope, $rootScope, $location, AuthenticationService ){

        AuthenticationService.ClearCredentials();

        $scope.login = function () {
          $scope.dataLoading = true;
          AuthenticationService.Login($scope.username, $scope.password, function (response) {

                  if(response.success){
                          AuthenticationService.SetCredentials($scope.username, $scope.password);
                          $location.path('/');

                  }else {
                          $scope.loginerror = response.message;
                          $scope.dataLoading = false;
                  }
          });
        };

        });