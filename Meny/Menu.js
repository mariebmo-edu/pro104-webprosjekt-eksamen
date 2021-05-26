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
        addPizza();

    });


    

    function newPizzaPopUp(){

        return `<div class="card pop-up-card">
            <div class="title card-title-padding card-header">
                ADD PIZZA
            </div>
            <div class="card-content">
                <input type="text" id="pizzaName" placeholder="Navn på pizza" value="" class="input">
                <input type="text" id="pizzaDescription" placeholder="Beskrivelse av pizza" value="" class="input">
                <input type="text" id="pizzaIngredients" placeholder="Ingredienser" value="" class="input">
                <input type="text" id="pizzaAllergies" placeholder="Allergier" value="" class="input">
                <input type="text" id="pizzaPrice" placeholder="Pris" value="" class="input">
                <button id="submitPizzaPopUpBtn" value="submitNewPizza" class="button">SUBMIT</button>
            </div>
        </div>
        `
    
       
    };
    

    function addPizza(){
    document.querySelector('#submitPizzaPopUpBtn').addEventListener('click', function(){
        let pizzaName = document.getElementById("pizzaName").value;
        let pizzaDescription = document.getElementById("pizzaDescription").value;
        let pizzaIngredients = document.getElementById("pizzaIngredients").value;
        let pizzaAllergies = document.getElementById("pizzaAllergies").value;
        let pizzaPrice = document.getElementById("pizzaPrice").value;

        pizzaNameCont.innerHTML += `
        <div>
            <div class="card card-size card-padding ml-6">
                <div class="card-header">
                <p class="grey-background card-header-title">
                ${pizzaName}
                </p>
                </div>

                <div class="card-image">
                <figure class="circular-portrait image">
                <img src= "../images/menu/newPizza.jpg" "alt="OsloPizza">
                </figure>
                </div>

                <div class="card-content-size card-content card-height">
                <br>
                <p class="title is-4 has-text-centered">${pizzaName}</p>
                <p class="subtitle is-6 has-text-weight-bold">Beskrivelse: ${pizzaDescription}.<br><br> Ingredienser: ${pizzaIngredients}<br><br></p>
                <p class="has-text-weight-bold">Allergier: ${pizzaAllergies}</p><br><br>
                <p class="has-text-weight-bold">Pris: ${pizzaPrice},-</p>
                </div>

                <div class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
                </div>
            </div>    
        </div>
        `
        popUpContainer.innerHTML = "";
    })
}





