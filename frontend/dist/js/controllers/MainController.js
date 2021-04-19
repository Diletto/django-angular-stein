app.controller("MainController", MainController)

function MainController($scope, $http){
    tempthis = this
    $http({method: 'GET', url: 'way.json'}).
    then(function success(response) {
        tempthis.way=response.data.way})
    $scope.MainController = this;
    
}
