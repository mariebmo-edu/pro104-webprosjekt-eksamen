import MenuModule from '../Modules/MenuModule.js';
const pizzaNameCont = document.querySelector('#Pizza');
const drinkNameCont = document.querySelector('#Drink');
const extraNameCont = document.querySelector('#Extra');
const allergieDropDown = document.querySelector('#allergieDropDown');
const popUpContainer = document.getElementById("popUpContainer");



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
                if (allergie.includes(element.allergies[i])) {
                    pizzaNameCont.innerHTML += MenuModule.printMenuItem(element);

                }
            }

        })
    }

});

    document.querySelector('#addPizzaBtn').addEventListener('click', function(){
        popUpContainer.innerHTML = newPizzaPopUp();

    });

    function newPizzaPopUp(){

        return `<div class="card pop-up-card">
            <div class="title card-title-padding card-header">
                ADD PIZZA
            </div>
            <div class="card-content">
                <input type="text" id="pizzaPicture" placeholder="Pizzabilde lastes opp autmoatisk" value="" class="input">
                <input type="text" id="pizzaName" placeholder="Navn på pizza" value="" class="input">
                <input type="text" id="pizzaDescription" placeholder="Beskrivelse av pizza" value="" class="input">
                <input type="text" id="pizzaIngredients" placeholder="Ingredienser" value="" class="input">
                <input type="text" id="pizzaAllergies" placeholder="Allergier" value="" class="input">
                <button id="submitPizzaPopUpBtn" value="submitNewPizza" class="button">SUBMIT</button>
            </div>
        </div>`
    
       
    };





