app.controller('PizzaController', 
    function($scope, $http){
        $http({method:"GET", url: "http://localhost:8080/pizza"}).then(function success(response){
            $scope.message = response.data.message;
        });
});