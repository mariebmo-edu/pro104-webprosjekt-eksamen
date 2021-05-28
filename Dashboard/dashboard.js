import LayoutModule from "../Modules/LayoutModule.js"
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"

//HTML-variables
const topAndSideBar = document.getElementById("topAndSideBar");

topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Dashboard");

let notifications = NotificationModule.getAllNotifications();
let restaurants = AddressModule.getAllAddresses();

let leftsideHTML = ``;

leftsideHTML += `<div class="card restaurants mb-5">
                        <div class="card-header card-title-padding title yellow-background">
                            Notifications!
                        </div>
                        <div class="card-content border-between-grey columns is-multiline">
                            <div class="card column is-12">
                                <div class="card-content">
                                    <div class="content">
                                        <h5 class="subtitle">Nyansatt</h5>
                                        <p>Julie jul</p>
                                    </div>
                                    <div class="content">
                                        <h5 class="subtitle">Sykemeldt</h5>
                                        <p>Julie jul</p>
                                    </div>
                                    <div class="content">
                                        <h5 class="subtitle">Sluttet</h5>
                                        <p>Julie jul</p>
                                    </div>
                                </div>
                            </div>
                            <div class="column is-12">
                                <div class="content">
                                `;
for (var i = 0; i < 5; i++) {
    leftsideHTML += `<h2>${notifications[i].restaurant}</h2>
                                                                                    <p>${notifications[i].message}</p>`;
}
leftsideHTML += `
                                </div>
                            </div>
                            <div class="column is-12">
                                <div class="content">
                                    <h5 class="subtitle">Nåværende kampanjer</h5>
                                    <p>Pizza og kos 199.-</p>
                                    <p>Netflix and chilli 149.-</p>
                                </div>
                            </div>
                        </div>
                    </div>`;


document.getElementById("left").innerHTML = leftsideHTML;