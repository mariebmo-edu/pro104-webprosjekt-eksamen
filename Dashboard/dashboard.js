import LayoutModule from "../Modules/LayoutModule.js"
import NotificationModule from "../Modules/NotificationModule.js"
import AddressModule from "../Modules/AddressModule.js"

//HTML-variables
const topAndSideBar = document.getElementById("topAndSideBar");

topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Dashboard");

let notifications = NotificationModule.getAllNotifications();
let restaurants = AddressModule.getAllAddresses();

let leftsideHTML = ``;
let rightsideHTML = ``;

leftsideHTML += `
                <div class="card">
                    <div class="card-header card-title-padding title yellow-background">Notes</div>
                    <div class="card-content">
                                <div class="content">
                                `;
for (var i = 0; i < 5; i++) {
    leftsideHTML += `<h2>${notifications[i].restaurant}</h2>
    <p>${notifications[i].message}</p>
    <p>${notifications[i].date.getDate()}/${notifications[i].date.getMonth()}/${notifications[i].date.getFullYear()}</p>`;
}
leftsideHTML += `
                                </div>
                            </div>
                </div>

                <div class="card mt-5">
                    <div class="card-header card-title-padding title yellow-background">Ansatte</div>
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
                </div>`;

rightsideHTML += `<div class="card mt-5">
                    <div class="card-header card-title-padding title yellow-background">Kampanjer</div>
                    <div class="card-content">
                        <div class="content">
                            <h5 class="subtitle">Nåværende kampanjer</h5>
                            <p>Pizza og kos 199.-</p>
                            <p>Netflix and chilli 149.-</p>
                        </div>
                    </div>
                </div>`;


document.getElementById("left").innerHTML = leftsideHTML;
document.getElementById("right").innerHTML += rightsideHTML;

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];
const data = {
    labels: labels,
    datasets: [{
        label: 'Salg',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
    }]
};
const config = {
    type: 'line',
    data,
    options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);