import AnsattModule from "../Modules/AnsattModule.js";
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"
import LayoutModule from "../Modules/LayoutModule.js"



//HTML-elements
const topAndSideBar = document.getElementById("topAndSideBar")
const storeButtonContainer = document.getElementById("storeButtonContainer");
const ansattCardContainer = document.getElementById("ansattCardContainer");
const notificationCardContainer = document.getElementById("notificationCardContainer")
const addressCardContainer = document.getElementById("AddressCardContainer");
const popUpContainer = document.getElementById("popUpContainer");



//variables
let selectedLocation = "Oslo";


addStoreButtons();
updateWebpage(selectedLocation);

function changeRestaurant(restaurantName){
    console.log(restaurantName.value)
}




function addStoreButtons(){
    storeButtonContainer.innerHTML = ""

    var addedLocations = AddressModule.getAllAddresses();
    addedLocations.forEach(location => {
        storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="${location.restaurant.toLowerCase()}" alt="knapp som tar deg til restaurantsiden for ${location.restaurant}">${location.restaurant.toUpperCase()}</button>`
    })

    storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="add-restaurant" alt="knapp som tar deg til "legg til restaurant"><i class="bi bi-plus-lg"></i>`

    document.querySelectorAll(".restaurant-button").forEach(restaurant => {
        restaurant.addEventListener("click", (r)=>{
            selectedLocation = r.srcElement.value
            updateWebpage(selectedLocation);
            
        })
    })
}

function updateWebpage(locationName){

    topAndSideBar.innerHTML = LayoutModule.printBaseLayout(`Restauranter > ${locationName}`);


    if(locationName === "add-restaurant"){
        addRestaurant()
        console.log("clicking add restaurant");
    }else{

        //Module-arrays

        console.log(locationName);


        var employees = AnsattModule.getEmployeeByRestaurant(locationName);
        var notifications = NotificationModule.getNotificationByRestaurant(locationName)
        var address = AddressModule.getAddressByRestaurant(locationName);

        ansattCardContainer.innerHTML = "";
        notificationCardContainer.innerHTML = "";
        addressCardContainer.innerHTML = "";

        address.forEach(address => {
            addressCardContainer.innerHTML += AddressModule.printAddressItem(address);
        })

        employees.forEach(employee => {
            ansattCardContainer.innerHTML += AnsattModule.printemployee(employee);
        });

        notifications.forEach(notification => {
            notificationCardContainer.innerHTML += NotificationModule.printNotificationItem(notification);
        });

        addStoreButtons();

    }
}

function addRestaurant(){

    popUpContainer.innerHTML = newRestaurantPopup();
    document.querySelectorAll("#submitRestaurantPopUpBtn").forEach(button => {
        button.addEventListener("click", (b)=>{
            addNewAddress();
            
        })
    })
    
}



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