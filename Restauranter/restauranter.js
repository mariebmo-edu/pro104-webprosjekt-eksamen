import AnsattModule from "../Modules/AnsattModule.js";
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"



//HTML-elements
const storeButtonContainer = document.getElementById("storeButtonContainer");
const ansattCardContainer = document.getElementById("ansattCardContainer");
const notificationCardContainer = document.getElementById("notificationCardContainer")
const addressCardContainer = document.getElementById("AddressCardContainer");
const restaurantButtons = document.querySelectorAll(".restaurant-button");



//variables
let selectedLocation = "Oslo";
addStoreButtons();
updateWebpage(selectedLocation);

function changeRestaurant(restaurantName){
    console.log(restaurantName.value)
}

document.querySelectorAll(".restaurant-button").forEach(restaurant => {
    restaurant.addEventListener("click", (r)=>{
        selectedLocation = r.srcElement.value
        updateWebpage(selectedLocation);
        
    })
})

function addStoreButtons(){
    var addedLocations = AddressModule.getAllAddresses();
    addedLocations.forEach(location => {
        storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="${location.restaurant.toLowerCase()}" alt="knapp som tar deg til restaurantsiden for ${location.restaurant}">${location.restaurant.toUpperCase()}</button>`
    })

    storeButtonContainer.innerHTML += ` <button class="restaurant-button" value="add-restaurant" alt="knapp som tar deg til "legg til restaurant"><i class="bi bi-plus-lg"></i>`
}

function updateWebpage(locationName){

    if(locationName === "add-restaurant"){
        addRestaurant()
    }else{

        //Module-arrays

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

    }
}

function addRestaurant(){
    console.log("added restaurant")
}