import MenuModule from '../Modules/MenuModule.js';
import { AddBasics } from './../javascript/index.js'

AddBasics();
const pizzaNameCont = document.querySelector('#Pizza');
const drinkNameCont = document.querySelector('#Drink');
const extraNameCont = document.querySelector('#Extra');



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

menuItems.forEach(element => {
    if(element.category == "Extra"){
        extraNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});
