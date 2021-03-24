app.controller('PizzaController', 
    function($scope, $http){
        $http({method:"GET", url: "http://localhost:8080"}).then(function success(response){
            $scope.message = response.data.message;
        });
});