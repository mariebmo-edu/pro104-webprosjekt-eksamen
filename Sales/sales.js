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
let salesInfo = updateSalesInfo();

topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Salg");

allSales.forEach(sales => {
    restaurantWithSale.add(sales.restaurant)
});

allMenu.forEach(item => {
    menuItems.add(item.name)
})

updateSalesPage();

function printHTMLCards(array){
    salesCardContainer.innerHTML = "";

    restaurantWithSale.forEach(restaurant => {
        salesCardContainer.innerHTML += `
        <div class="column is-one-quarter">
        <div class="card">
            <h2 class="card-header title yellow-background card-title-padding">
                ${restaurant.toUpperCase()}
            </h2>					
        </div>
    
        <div class="columns is-multiline">
            <div class="column is-full">
                <div class="card height-200 center-text">
                    ${returnCorrectObject(array, restaurant).restaurant}
                </div>
            </div>
            <div class="column is-full">
                <div class="card height-200 center-text">
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


salesSearchBtn.onclick = updateSalesPage

function updateSalesPage(){
    printHTMLCards(updateSalesInfo());
}

function printObject(obj){
    let output = ""
    Object.entries(obj).filter((arr) => arr[1] != 0).forEach(([a,b]) => {output+= `${a} : ${b} <br>`})
    return output
}

function returnCorrectObject(arr, restaurant){
    let selectedObj = {}
    arr.forEach(obj => {if (obj.restaurant.toLowerCase() === restaurant.toLowerCase()){
        selectedObj = obj;
        console.log(obj)
    }})
    return selectedObj;
}

function updateSalesInfo(){
    const fromDateValue = new Date(fromDateSales.value);
    const toDateValue = new Date(toDateSales.value);
    let salesInfo = []

    restaurantWithSale.forEach(restaurant => {

        let initItemSold = {}
        menuItems.forEach(item => {
            initItemSold[item] = 0
        })

        let tempObj = {restaurant, transactions:0, itemsSold:initItemSold, earnings:0}

        allSales.forEach(sale => {
            if(sale.date >= fromDateValue && sale.date <= toDateValue && sale.restaurant == restaurant){
                tempObj.transactions += sale.transactions;
                tempObj.earnings += sale.earnings;
                var items = Object.keys(sale.itemsSold);
                items.forEach(key => {
                    if(Object.keys(tempObj.itemsSold).indexOf(key)!=-1){
                        tempObj.itemsSold[key] += sale.itemsSold[key]
                    }
                })              
            }
        })

        salesInfo.push(tempObj)  
    })
 return salesInfo;
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