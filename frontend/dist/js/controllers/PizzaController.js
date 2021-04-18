app.controller('PizzaController', 
    function($scope, $http){
        //$scope.name = 'Гавайська22'
        $scope.list = model;
       
});


var model = {

    items:[{
        itemClass:"CLASSIC",
        items: [
            { name: "Гавайська",ingridients: "Куряче філе, Маринований солодкий перець, Ананаси, Класичний соус",img:"../img/pizzas/gavai.webp",weight : 250, price: 220 },
            {  name: "Маргарита",ingridients:"Куряче філе" ,img:"../img/pizzas/margarita.webp",weight : 120, price: 230 },
            {  name: "Карбонара",img:"../img/pizzas/barbeku.webp",weight : 520, price: 162 },
            { name: "Гавайська",ingridients: "Куряче філе, Маринований солодкий перець, Ананаси, Класичний соус",img:"../img/pizzas/gavai.webp",weight : 250, price: 220 },
            {  name: "Маргарита",img:"../img/pizzas/margarita.webp",weight : 120, price: 230 },
            {  name: "Карбонара",img:"../img/pizzas/barbeku.webp",weight : 520, price: 162 },
        ]
    },
    {
        itemClass:"Supreme",
        items: [
            {  name: "Гавайська",img:"../img/pizzas/gavai.webp",weight : 120, price: 176 },
            { name: "Барбекю",img:"../img/pizzas/barbeku.webp",weight : 120, price: 204 },
            { name: "Гавайська",img:"../img/pizzas/barbeku.webp",weight : 120, price: 200 }
        ]
    }]
};