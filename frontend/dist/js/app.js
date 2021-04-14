var app = angular.module('app', ["ngRoute"])
    .config(function($routeProvider,$locationProvider){
        $locationProvider.html5Mode(true);
        let lang = "/:lang";
        $routeProvider.when('/',
        {
            templateUrl:'views/profile.html',
            controller:'PizzaController'
        });
        $routeProvider.when(lang + '/pizza',
        {
            templateUrl:'views/profile.html',
            controller:'PizzaController'
        });
        $routeProvider.when(lang + '/drinks',
        {
            templateUrl:'views/drinks.html',
            controller:'DrinksController'
        });
        $routeProvider.when(lang + '/salads',
        {
            templateUrl:'views/salads.html',
            controller:'SaladsController'
        });

});