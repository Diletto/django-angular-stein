app.controller('DrinksController', DrinksController)
function DrinksController($scope, $http){
    this.PushToOrder = PushToOrder;
    var temp = this;
    $scope.DrinksController = this;
    $http({method: "GET", url: "http://localhost:8080/drinks"}).then(function success(response)
    {
        temp.list = response.data;
        console.log("temp  : " + temp.list);
    });
}
function PushToOrder(){
    alert("Would you a pizza?");
};