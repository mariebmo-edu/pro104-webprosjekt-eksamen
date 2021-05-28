import SalesModule from "../Modules/SalesModule.js"
import MenuModule from "../Modules/MenuModule.js"
import LayoutModule from "../Modules/LayoutModule.js"


//HTML-Variables
const topAndSideBar = document.getElementById("topAndSideBar");
const salesCardContainer = document.getElementById("salesCardContainer");
const fromDateSales = document.getElementById("fromDateSales");
const toDateSales = document.getElementById("toDateSales");
const salesSearchBtn = document.getElementById("salesSearchBtn");

//JS-variables
const allSales = SalesModule.getAllSales();
const allMenu = MenuModule.getAllMenuItems();
const restaurantWithSale = new Set()
const menuItems = new Set();

//Genererer topp- og sidebar med teksten "salg"
topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Salg");


//For hvert element i "sales", så legges restaurantnavnet i en set-list
allSales.forEach(sales => {
    restaurantWithSale.add(sales.restaurant)
});

//for hvert element i "menu" legges hvert item-navn i menuItems set-listen
allMenu.forEach(item => {
    menuItems.add(item.name)
})

//oppdaterer salgsiden
updateSalesPage();

//når man klikker på knappen oppdateres siden.
salesSearchBtn.onclick = updateSalesPage


function updateSalesPage() {
    printHTMLCards(updateSalesInfo());
}


//printer HTML-layoutet til nettsiden, tar inn et array den bruker for de forskjellige elementene.
function printHTMLCards(array) {
    salesCardContainer.innerHTML = "";

    restaurantWithSale.forEach(restaurant => {
        salesCardContainer.innerHTML += `
        <div class="column is-one-quarter">
        <div class="card-yellow">
            <h2 class="card-header title card-title-padding">
                ${restaurant.toUpperCase()}
            </h2>					
        </div>
    
        <div class="columns is-multiline">
            <div class="column is-full">
                <div class="card height-200 center-text has-text-weight-semibold ">
                    ${returnCorrectObject(array, restaurant).restaurant}
                </div>
            </div>
            <div class="column is-full">
                <div class="card height-200 center-text">
                <br>
                ${printObject(returnCorrectObject(array, restaurant).itemsSold)}
                </div>
            </div>
            <div class="column is-full">
                <div class="card height-50 center-text">
                ${returnCorrectObject(array, restaurant).transactions}
                </div>
            </div>
            <div class="column is-full">
                <div class="card height-100 center-text">
                ${returnCorrectObject(array, restaurant).earnings}
                </div>
            </div>
            <div class="column is-full">
                <div class="card height-50 center-text">
                    hello
                </div>
            </div>
        </div>
    </div>`
    });
}


//returnerer et objekt som en string
function printObject(obj) {
    let output = ""
    Object.entries(obj).filter((arr) => arr[1] != 0).forEach(([a, b]) => { output += `${a} : ${b} <br>` })
    return output
}

//returnerer riktig objekt basert på restaurantnavnet
function returnCorrectObject(arr, restaurant) {
    let selectedObj = {}
    arr.forEach(obj => {
        if (obj.restaurant.toLowerCase() === restaurant.toLowerCase()) {
            selectedObj = obj;
            console.log(obj)
        }
    })
    return selectedObj;
}

//oppdaterer salgsinformasjonen basert på til og fra-dato
function updateSalesInfo() {
    const fromDateValue = new Date(fromDateSales.value);
    const toDateValue = new Date(toDateSales.value);
    let salesInfo = []

    //kjøres for hver restaurant i restaurant-arrayet
    restaurantWithSale.forEach(restaurant => {

        //legger til meny-items som base i et tomt objekt
        let initItemSold = {}
        menuItems.forEach(item => {
            initItemSold[item] = 0
        })

        //laget et tomt objekt med nullstilte verdier 
        let tempObj = { restaurant, transactions: 0, itemsSold: initItemSold, earnings: 0 }

        //for hvert salg sjekkes det om det er innenfor valgte datoer, og i den valgte restauranten. Hvis den er det legges plusses verdiene til det tomme arrayet
        allSales.forEach(sale => {
            if (sale.date >= fromDateValue && sale.date <= toDateValue && sale.restaurant == restaurant) {
                tempObj.transactions += sale.transactions;
                tempObj.earnings += sale.earnings;

                //lager nytt array basert på itemsSold i salget.
                var items = Object.keys(sale.itemsSold);

                //for hver item i arrayet, ser man om temp-objektets nøkkel eksisterer, og hvis det gjør det plusses verdien på verdien som er i salget.
                items.forEach(key => {
                    if (Object.keys(tempObj.itemsSold).indexOf(key) != -1) {
                        tempObj.itemsSold[key] += sale.itemsSold[key]
                    }
                })
            }
        })

        //legger til tempObj i salesInfo-arrayet
        salesInfo.push(tempObj)
    })
    //returnerer salesInfo-arrayet med salgsdata for alle transaksjoner innen gitt tidsrom
    return salesInfo;
}
