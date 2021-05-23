app.controller('SaladsController', SaladsController)
function SaladsController($scope, $http){
    this.PushToOrder = PushToOrder;
    var temp = this;
    $scope.SaladsController = this;
    $http({method: "GET", url: "http://localhost:8080/salads"}).then(function success(response)
    {
        temp.list = response.data;
        console.log("temp  : " + temp.list);
    });
}
function PushToOrder(){
    alert("Would you a pizza?");
};