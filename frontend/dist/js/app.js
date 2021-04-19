var app = angular.module('app', ["ngRoute"])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when('/',
        {
            templateUrl:'views/pizza.html',
            controller:'PizzaController'
        });
        $routeProvider.when('/pizza',
        {
            templateUrl:'views/pizza.html',
            controller:'PizzaController'
        });
        $routeProvider.when('/drinks',
        {
            templateUrl:'views/drinks.html',
            controller:'DrinksController'
        });
        $routeProvider.when('/salads',
        {
            templateUrl:'views/salads.html',
            controller:'SaladsController'
        });

});