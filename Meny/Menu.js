import MenuModule from '../Modules/MenuModule.js';
const pizzaNameCont = document.querySelector('#Pizza');
const drinkNameCont = document.querySelector('#Drink');
const extraNameCont = document.querySelector('#Extra');
const allergieDropDown = document.querySelector('#allergieDropDown');



let menuItems = MenuModule.getAllMenuItems();

menuItems.forEach(element => {
    if (element.category == "Pizza") {
        pizzaNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});

menuItems.forEach(element => {
    if (element.category == "Drink") {
        drinkNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});

menuItems.forEach(element => {
    if (element.category == "Extra") {
        extraNameCont.innerHTML += MenuModule.printMenuItem(element);
    }
});

document.querySelector('#searchBtn').addEventListener('click', function () {


    let allergieDropDown = document.querySelector('#allergieDropdown');
    let allergie = allergieDropDown.value;
    allergie = allergie.toLowerCase();
    pizzaNameCont.innerHTML = "";

    if (allergie == "all") {
        menuItems.forEach(element => {
            if (element.category == "Pizza") {
                pizzaNameCont.innerHTML += MenuModule.printMenuItem(element);
            }
        });
    } else {
        menuItems.forEach(element => {
            for (let i = 0; i < element.allergies.length; i++) {
                if (allergie == element.allergies[i]) {
                    pizzaNameCont.innerHTML += MenuModule.printMenuItem(element);

                }
            }

        })
    }

});
