'use strict';

// Declare app level module which depends on views, and components
angular
    .module('apbLeague', [
        'ngRoute',
        'apbLeague.view1',
        'apbLeague.view2',
        'apbLeague.foundationView',
        'apbLeague.version'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view1', {
                templateUrl: 'views/view1.html',
                controller: 'View1Ctrl',
                title: 'View 1'
            })
            .when('/view2', {
                templateUrl: 'views/view2.html',
                controller: 'View2Ctrl',
                title: 'View 2'
            })
            .when('/foundationView', {
                templateUrl: 'views/foundationView.html',
                controller: 'FoundationCtrl',
                title: "Foundation"
            })
            .otherwise({
                redirectTo: '/view1'
            });
    }])
    .controller('AppController', ['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);
