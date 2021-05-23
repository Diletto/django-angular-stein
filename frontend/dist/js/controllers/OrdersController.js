app.controller('OrdersController', OrdersController)
function OrdersController($scope, $http){
    this.PushToOrder = PushToOrder;
    var temp = this;
    $scope.OrdersController = this;
    $http({method: "GET", url: "http://localhost:8080/orders"}).then(function success(response)
    {
        temp.list = response.data;
        console.log("temp  : " + temp.list);
    });
}
function PushToOrder(){
    alert("Would you a pizza?");
};