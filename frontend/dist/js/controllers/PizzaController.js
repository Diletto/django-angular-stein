app.controller('PizzaController', PizzaController)
function PizzaController($scope){
    this.list = model;
    this.PushToOrder = PushToOrder;
    $scope.PizzaController = this;
}
function PushToOrder(){
    alert("Would you a pizza?");
};

var model = {

    items:[{
        itemClass:"CLASSIC",
        items: [
            { name: "Гавайська",ingridients: "Куряче філе, Маринований солодкий перець, Ананаси, Класичний соус",img:"../img/pizzas/gavai.webp",weight : 250, measure:"г", price: 220 },
            {  name: "Маргарита",ingridients:"Куряче філе" ,img:"../img/pizzas/margarita.webp",weight : 120,  measure:"г", price: 230 },
            {  name: "Карбонара",img:"../img/pizzas/barbeku.webp",weight : 520, measure:"г", price: 162 },
            { name: "Гавайська",ingridients: "Куряче філе, Маринований солодкий перець, Ананаси, Класичний соус",img:"../img/pizzas/gavai.webp",weight : 250, measure:"г",  price: 220 },
            {  name: "Маргарита",img:"../img/pizzas/margarita.webp",weight : 120,  measure:"г", price: 230 },
            {  name: "Карбонара",img:"../img/pizzas/barbeku.webp",weight : 520, measure:"г",  price: 162 },
        ]
    },
    {
        itemClass:"Supreme",
        items: [
            {  name: "Гавайська",img:"../img/pizzas/gavai.webp",weight : 120,  measure:"г", price: 176 },
            { name: "Барбекю",img:"../img/pizzas/barbeku.webp",weight : 120,  measure:"г", price: 204 },
            { name: "Гавайська",img:"../img/pizzas/barbeku.webp",weight : 120,  measure:"г", price: 200 }
        ]
    }]
};