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
        $routeProvider.when('/', {templateUrl: 'theme/infusion/index.html', controller: 'Main'});
        $routeProvider.when('/contato', {templateUrl: 'theme/infusion/contact-us.html', controller: 'Contacts'});
        $routeProvider.when('/404', {templateUrl: 'theme/infusion/404.html'});
        $routeProvider.otherwise({redirectTo: '/404'});
    }]);
