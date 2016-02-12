'use strict';
var app = angular.module('app', [
    'ngResource',
    'ui.router',
    'lbServices'
])
    .run(
        [
            '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    ).controller('appController', ['$scope','$state', function (scope,state) {
                state.go('app.index');
            }]);