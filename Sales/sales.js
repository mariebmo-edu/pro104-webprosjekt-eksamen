import SalesModule from "../Modules/SalesModule.js"


//HTML-Variables
const salesCardContainer = document.getElementById("salesCardContainer");
const fromDateSales = document.getElementById("fromDateSales");
const toDateSales = document.getElementById("toDateSales");
const salesSearchBtn = document.getElementById("salesSearchBtn");



const allSales = SalesModule.getAllSales();
const restaurantWithSale = new Set()

allSales.forEach(sales => {
    restaurantWithSale.add(sales.restaurant)
});

restaurantWithSale.forEach(restaurant => {
    salesCardContainer.innerHTML += `<div class="column is-one-quarter">
    <div class="card">
        <div class="card-header title card-title-padding">
            ${restaurant.toUpperCase()}
        </div>					
    </div>

    <div class="columns is-multiline">
        <div class="column is-full">
            <div class="card height-200 center-text">
                hello
            </div>
        </div>
        <div class="column is-full">
            <div class="card height-100 center-text">
                hello
            </div>
        </div>
        <div class="column is-full">
            <div class="card height-50 center-text">
                hello
            </div>
        </div>
        <div class="column is-full">
            <div class="card height-100 center-text">
                hello
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

salesSearchBtn.onclick =()=> updateSalesInfo();

function updateSalesInfo(){
    const fromDateValue = new Date(fromDateSales.value);
    const toDateValue = new Date(toDateSales.value);

    allSales.forEach(sale => {
        if(sale.date > fromDateValue && sale.date < toDateValue){
            console.log("IN RANGE")
        }
        else{
            console.log("NOT IN RANGE")
        }
    })
}

/*{date: new Date("2021-05-10"), restaurant: "Oslo", transactions: 155, itemsSold:{oslopizza:12, kebabpizza:14, pepperonipizza:11, cocacola:2}, earnings: 20394.93},*/

  /*<div class="column is-one-quarter">
				<div class="card">
					<div class="card-header title card-title-padding">
						OSLO
					</div>					
				</div>

				<div class="columns is-multiline">
					<div class="column is-full">
						<div class="card height-200 center-text">
							hello
						</div>
					</div>
					<div class="column is-full">
						<div class="card height-100 center-text">
							hello
						</div>
					</div>
					<div class="column is-full">
						<div class="card height-50 center-text">
							hello
						</div>
					</div>
					<div class="column is-full">
						<div class="card height-100 center-text">
							hello
						</div>
					</div>
					<div class="column is-full">
						<div class="card height-50 center-text">
							hello
						</div>
					</div>
				</div>
			</div>*/