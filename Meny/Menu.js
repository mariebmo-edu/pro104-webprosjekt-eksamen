import MenuModule from '../Modules/MenuModule.js';
const pizzaNameCont = document.querySelector('#Pizza');
const drinkNameCont = document.querySelector('#Drink');
const extraNameCont = document.querySelector('#Extra');
const allergieDropDown = document.querySelector('#allergieDropDown');
const popUpContainer = document.getElementById("popUpContainer");



//Print pizza, drinks, and extra on main page.
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
//END


//"SØK NÅ" button with working functions
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

//ADD PIZZA FUNCTIONS

document.querySelector('#addPizzaBtn').addEventListener('click', function () {
    popUpContainer.innerHTML = newPizzaPopUp();
    addPizza();

});

function newPizzaPopUp() {

    //POP UP CARDET

    return `<div class="card pop-up-card">
            <div class="title card-title-padding card-header">
                LEGG TIL NY PIZZA
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

//addPizza function linked with addPizzaBtn 
function addPizza() {
    document.querySelector('#submitPizzaPopUpBtn').addEventListener('click', function () {
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


//ADD SODA FUNCTIONS

document.querySelector('#addSodaBtn').addEventListener('click', function () {
    popUpContainer.innerHTML = newSodaPopUp();
    addSoda();

});


function newSodaPopUp() {

    //POP UP CARDET

    return `<div class="card pop-up-card">
        <div class="title card-title-padding card-header">
            LEGG TIL DRIKKEVARE
        </div>
        <div class="card-content">
            <input type="text" id="sodaName" placeholder="Drikkevare navn" value="" class="input">
            <input type="text" id="sodaDescription" placeholder="Beskrivelsea" value="" class="input">
            <input type="text" id="sodaIngredients" placeholder="Ingredienser" value="" class="input">
            <input type="text" id="sodaAllergies" placeholder="Allergier" value="" class="input">
            <input type="text" id="sodaPrice" placeholder="Pris" value="" class="input">
            <button id="submitSodaPopUpBtn" value="submitNewSoda" class="button">SUBMIT</button>
        </div>
    </div>
    `


};

function addSoda() {
    document.querySelector('#submitSodaPopUpBtn').addEventListener('click', function () {
        let sodaName = document.getElementById("sodaName").value;
        let sodaDescription = document.getElementById("sodaDescription").value;
        let sodaIngredients = document.getElementById("sodaIngredients").value;
        let sodaAllergies = document.getElementById("sodaAllergies").value;
        let sodaPrice = document.getElementById("sodaPrice").value;

        drinkNameCont.innerHTML += `
    <div>
        <div class="card card-size card-padding ml-6">
            <div class="card-header">
            <p class="grey-background card-header-title">
            ${sodaName}
            </p>
            </div>

            <div class="card-image">
            <figure class="circular-portrait image">
            <img src= "../images/menu/newSoda.jpg" "alt="OsloPizza">
            </figure>
            </div>

            <div class="card-content-size card-content card-height">
            <br>
            <p class="title is-4 has-text-centered">${sodaName}</p>
            <p class="subtitle is-6 has-text-weight-bold">Beskrivelse: ${sodaDescription}.<br><br> Ingredienser: ${sodaIngredients}<br><br></p>
            <p class="has-text-weight-bold">Allergier: ${sodaAllergies}</p><br><br>
            <p class="has-text-weight-bold">Pris: ${sodaPrice},-</p>
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



//EXTRA FUNCTIONS
document.querySelector('#addExtraBtn').addEventListener('click', function () {
    popUpContainer.innerHTML = newExtraPopUp();
    addExtra();

});


function newExtraPopUp() {

    //POP UP CARDET

    return `<div class="card pop-up-card">
        <div class="title card-title-padding card-header">
            LEGG TIL NY EKSTRAVARE
        </div>
        <div class="card-content">
            <input type="text" id="extraName" placeholder="Type vare" value="" class="input">
            <input type="text" id="extraDescription" placeholder="Beskrivelse av varen" value="" class="input">
            <input type="text" id="extraIngredients" placeholder="Ingredienser" value="" class="input">
            <input type="text" id="extraAllergies" placeholder="Allergier" value="" class="input">
            <input type="text" id="extraPrice" placeholder="Pris" value="" class="input">
            <button id="submitExtraPopUpBtn" value="submitNewExtra" class="button">SUBMIT</button>
        </div>
    </div>
    `


};

function addExtra() {
    document.querySelector('#submitExtraPopUpBtn').addEventListener('click', function () {
        let extraName = document.getElementById("extraName").value;
        let extraDescription = document.getElementById("extraDescription").value;
        let extraIngredients = document.getElementById("extraIngredients").value;
        let extraAllergies = document.getElementById("extraAllergies").value;
        let extraPrice = document.getElementById("extraPrice").value;

        extraNameCont.innerHTML += `
    <div>
        <div class="card card-size card-padding ml-6">
            <div class="card-header">
            <p class="grey-background card-header-title">
            ${extraName}
            </p>
            </div>

            <div class="card-image">
            <figure class="circular-portrait image">
            <img src= "../images/menu/newExtra.jpg" "alt="OsloPizza">
            </figure>
            </div>

            <div class="card-content-size card-content card-height">
            <br>
            <p class="title is-4 has-text-centered">${extraName}</p>
            <p class="subtitle is-6 has-text-weight-bold">Beskrivelse: ${extraDescription}.<br><br> Ingredienser: ${extraIngredients}<br><br></p>
            <p class="has-text-weight-bold">Allergier: ${extraAllergies}</p><br><br>
            <p class="has-text-weight-bold">Pris: ${extraPrice},-</p>
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




