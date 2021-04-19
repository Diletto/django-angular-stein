app.controller('DrinksController', DrinksController)

function DrinksController($scope){
    this.list = drinks_model;
    $scope.DrinksController = this;
}

drinks_model = {
    items:[{
        itemClass:"COLD DRINKS",
        items: [
            { name: "Coca Cola",img:"../img/pizzas/gavai.webp",weight : 0.5,  measure:"л", price: 20 },
            { name: "Sprite",img:"../img/pizzas/gavai.webp",weight : 0.75, measure:"л",price: 25 },
            { name: "Pepsi Cola",img:"../img/pizzas/gavai.webp",weight : 0.75,measure:"л", price: 15 },
            { name: "7Up",img:"../img/pizzas/gavai.webp",weight : 0.75,measure:"л", price: 20 },
            { name: "Fanta",img:"../img/pizzas/gavai.webp",weight : 0.75, measure:"л",price: 20 },
            { name: "Juice",img:"../img/pizzas/gavai.webp",weight : 1,measure:"л", price: 30 },
        ]
    },
    {
        itemClass:"HOT DRINKS",
        items: [
            {  name: "Black Tea",img:"../img/pizzas/gavai.webp",weight : 0.5,measure:"л", price: 15 },
            {  name: "Green Tea",img:"../img/pizzas/gavai.webp",weight : 0.5, measure:"л",price: 15 },
            { name: "Americano",img:"../img/pizzas/barbeku.webp",weight : 0.3,measure:"л", price: 20 },
            { name: "Cappuchino",img:"../img/pizzas/barbeku.webp",weight : 0.3, measure:"л",price: 20 },
            { name: "Latte",img:"../img/pizzas/barbeku.webp",weight : 0.3,measure:"л", price: 20 },
        ]
    }]
}