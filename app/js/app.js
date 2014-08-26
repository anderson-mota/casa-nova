'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers'
]).
    config(['$routeProvider', function ($routeProvider) {
        var theme = "theme/infusion/";

        $routeProvider.when('/', {templateUrl: theme + 'index.html', controller: 'Main'});
        $routeProvider.when('/o-que-fazemos', {templateUrl: theme + 'what-we-do.html', controller: 'WhatWeDo'});
        $routeProvider.when('/contato', {templateUrl: theme + 'contact-us.html', controller: 'Contacts'});
        $routeProvider.when('/404', {templateUrl: theme + '404.html'});
        $routeProvider.otherwise({redirectTo: '/404'});
    }]);
