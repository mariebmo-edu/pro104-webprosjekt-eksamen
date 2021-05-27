import LayoutModule from "../Modules/LayoutModule.js"

//HTML-variables
const topAndSideBar = document.getElementById("topAndSideBar");

topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Dashboard")