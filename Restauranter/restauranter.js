import AnsattModule from "../Modules/AnsattModule.js";
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"
import LayoutModule from "../Modules/LayoutModule.js"
import SalesModule from "../Modules/SalesModule.js"
import CampaignModule from "../Modules/CampaignModule.js"


//HTML-elements
const topAndSideBar = document.getElementById("topAndSideBar")
const storeButtonContainer = document.getElementById("storeButtonContainer");
const ansattCardContainer = document.getElementById("ansattCardContainer");
const notificationCardContainer = document.getElementById("notificationCardContainer")
const addressCardContainer = document.getElementById("AddressCardContainer");
const salesCardContainer = document.getElementById("salesCardContainer");
const campaignCardContainer = document.getElementById("campaignCardContainer");
const topListCardContainer = document.getElementById("topListCardContainer");
const popUpContainer = document.getElementById("popUpContainer");

//variables
let selectedLocation = "Oslo";


//legger til butikk-knappene, samt oppdaterer nettsiden
addStoreButtons();
updateWebpage(selectedLocation);


//legger til butikk-knappene
function addStoreButtons(){
    storeButtonContainer.innerHTML = ""

    //henter alle lokasjonene fra adresse-modulen og legger de inn i HTML
    var addedLocations = AddressModule.getAllAddresses();
    addedLocations.forEach(location => {
        storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="${location.restaurant.toLowerCase()}" alt="knapp som tar deg til restaurantsiden for ${location.restaurant}">${location.restaurant.toUpperCase()}</button>`
    })

    //legger til "legg til restaurant"-knapp på slutten
    storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="add-restaurant" alt="knapp som tar deg til "legg til restaurant"><i class="bi bi-plus-lg"></i>`

    //knappen legger til onclick-listener for å se om man skal endre side. Hvis den klikkes på legges valuen til knappen (navnet) inn i updateWebpage
    document.querySelectorAll(".restaurant-button").forEach(restaurant => {
        restaurant.addEventListener("click", (r)=>{
            selectedLocation = r.srcElement.value
            updateWebpage(selectedLocation);
            
        })
    })
}

//oppdaterer nettsiden
function updateWebpage(locationName){

    //legger riktig underside til toppteksten på siden
    topAndSideBar.innerHTML = LayoutModule.printBaseLayout(`Restauranter > ${locationName}`);


    //hvis locationName er "add-restaurant" skal den kjøre "addRestaurant()"-funksjonen
    if(locationName === "add-restaurant"){
        addRestaurant()
        console.log("clicking add restaurant");
    }else{

        //Module-arrays, oppdateres basert på valgt restaurant
        var employees = AnsattModule.getEmployeeByRestaurant(locationName);
        var notifications = NotificationModule.getNotificationByRestaurant(locationName)
        var address = AddressModule.getAddressByRestaurant(locationName);
        var sales = SalesModule.getSalesByRestaurant(locationName);
        var campaigns = CampaignModule.getAllCampaigns();
        var topSales = Object.keys(sales[0].itemsSold);

        console.log(campaigns)

        //nullstiller HTML
        ansattCardContainer.innerHTML = "";
        notificationCardContainer.innerHTML = "";
        addressCardContainer.innerHTML = "";
        salesCardContainer.innerHTML = "";
        campaignCardContainer.innerHTML = "";
        topListCardContainer.innerHTML = "";


        //legger til adresse
        address.forEach(address => {
            addressCardContainer.innerHTML += AddressModule.printAddressItem(address);
        })

        //legger til ansatte
        employees.forEach(employee => {
            ansattCardContainer.innerHTML += AnsattModule.printemployee(employee);
        });

        //legger til notifications
        notifications.forEach(notification => {
            notificationCardContainer.innerHTML += NotificationModule.printNotificationItem(notification);
        });

        //legger til salg
        sales.forEach(sale => {

            if(salesCardContainer.innerHTML === ""){
                salesCardContainer.innerHTML += SalesModule.printSalesItem(sale);
            }
        })

        //legger til kampanjer
        campaigns.forEach(campaign => {
            campaignCardContainer.innerHTML += CampaignModule.printCampaign(campaign)
        })


        //legger til toppsalg for restaurant
        topSales.forEach(sale => topListCardContainer.innerHTML += `
        <div class="ranking-info-card card column is-full">
            ${sale}
        </div>`)
        

        //oppdaterer knapper
        addStoreButtons();

    }
}

//legger til ny restaurant
function addRestaurant(){

    popUpContainer.innerHTML = newRestaurantPopup();
    document.querySelectorAll("#submitRestaurantPopUpBtn").forEach(button => {
        button.addEventListener("click", (b)=>{
            addNewAddress();
            
        })
    })
    
}


//pop-up som genereres når knappen trykkes på
function newRestaurantPopup(){

    return `<div class="card pop-up-card">
        <div class="title card-title-padding card-header">
            ADD RESTAURANT
        </div>
        <div class="card-content">
            <input type="text" id="locationNamePopUpInput" placeholder="Restaurant" value="Lofoten" class="input">
            <input type="text" id="streetPopUpInput" placeholder="Gatenavn" value="Lofotveien 123" class="input">
            <input type="text" id="postalPopUpInput" placeholder="Postkode" value="4567" class="input">
            <input type="text" id="cityPopUpInput" placeholder="By" value="Lofoten" class="input">
            <input type="text" id="phonePopUpInput" placeholder="Mobilnummer" value="+48 673 82 938" class="input">
            <button id="submitRestaurantPopUpBtn" value="submitNewRestaurant" class="button">SUBMIT</button>
        </div>
    </div>`

   
}

//legger til ny adresse i adresse-modulen basert på input og oppdaterer nettsiden
function addNewAddress(){

    let locationNamePopUp = document.getElementById("locationNamePopUpInput").value;
    let streetPopUp = document.getElementById("streetPopUpInput").value;
    let postalNamePopUp = document.getElementById("postalPopUpInput").value;
    let cityPopUp = document.getElementById("cityPopUpInput").value;
    let phoneUp = document.getElementById("phonePopUpInput").value;

    console.log(locationNamePopUp + " map_oslo.png " + streetPopUp + postalNamePopUp + cityPopUp + phoneUp)

    AddressModule.addAddress(locationNamePopUp, "map_oslo.png", streetPopUp, postalNamePopUp, cityPopUp, phoneUp);

    addStoreButtons();
    updateWebpage(locationNamePopUp);
    popUpContainer.innerHTML = ""

}