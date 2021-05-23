app.controller('PizzaController', PizzaController)
function PizzaController($scope, $http){
    this.PushToOrder = PushToOrder;
    var temp = this;
    $scope.PizzaController = this;
    $http({method: "GET", url: "http://localhost:8080/pizza"}).then(function success(response)
    {
        temp.list = response.data;
        console.log("temp  : " + temp.list);
    });
}
function PushToOrder(){
    alert("Would you a pizza?");
};
