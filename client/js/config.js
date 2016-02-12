'use strict';
app.config(
        [
            '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                //$urlRouterProvider.otherwise('/index');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'index.html'
                    }).state('app.index', {
                        url: '/index',
                        templateUrl: 'main.html',
                        ncyBreadcrumb: {
                            label: 'Main'
                        },
                        controller: 'mainController',
                    })
                    .state('app.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'dashboard.html',
                        ncyBreadcrumb: {
                            label: 'Dashboard'
                        },
                        controller: 'dashboardController',
                    })
            }
        ]
    );
