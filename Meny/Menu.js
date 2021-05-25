import MenuModule from '../Modules/MenuModule.js';
const pizzaNameCont = document.querySelector('#Pizza');
const drinkNameCont = document.querySelector('#Drink');



let menuItems = MenuModule.getAllMenuItems();

menuItems.forEach(element => {
    if(element.category == "Pizza"){
        pizzaNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});

menuItems.forEach(element => {
    if(element.category == "Drink"){
        drinkNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});
