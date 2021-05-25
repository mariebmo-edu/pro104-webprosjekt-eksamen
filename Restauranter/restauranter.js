import AnsattModule from "../Modules/AnsattModule.js";

var ansattCardContainer = document.getElementById("ansattCardContainer");

var employees = AnsattModule.getEmployeeByRestaurant("Oslo");


employees.forEach(employee => {
    ansattCardContainer.innerHTML += AnsattModule.printemployee(employee);
});