app.controller("MainController", 
    function($scope, $http){
        $http({method: 'GET', url: 'way.json'}).
            then(function success(response) {
                $scope.way=response.data.way;
        });
})