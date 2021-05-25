import AnsattModule from "../Modules/AnsattModule.js";
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"



//HTML-elements
var ansattCardContainer = document.getElementById("ansattCardContainer");
var notificationCardContainer = document.getElementById("notificationCardContainer")
var addressCardContainer = document.getElementById("AddressCardContainer");
var restaurantButtons = document.querySelectorAll(".restaurant-button");



//variables
let selectedLocation = "Oslo";
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


function updateWebpage(locationName){

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