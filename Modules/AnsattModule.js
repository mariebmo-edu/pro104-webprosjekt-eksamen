const AnsattModule = function(){

    const ansatte = [
        {name: "Jenny Jenny", anr: 73823, restaurant:"Oslo", percentage:100, position:"Daglig leder", status:"working", image:"girl_00.jpg"},
        {name: "Trude Trudesen", anr: 12032, restaurant:"Oslo", percentage:100, position:"Kokk", status:"working", image:"girl_01.jpg"},
        {name: "Maria Mena", anr: 32204, restaurant:"Stavanger", percentage:100, position:"Daglig leder", status:"sickleave", image:"girl_02.jpg"},
        {name: "Bob Bobby", anr: 23422, restaurant:"Oslo", percentage:60, position:"Servior", status:"sickleave", image:"boy_00.jpg"},
        {name: "Lars Larsson", anr: 23024, restaurant:"Oslo", percentage:10, position:"Kokk, Vikar", status:"working", image:"boy_01.jpg"},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:"", image:""},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:"", image:""},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:"", image:""},
    ]

    const getAllEmployees =()=> ansatte;
    const getEmployeeByRestaurant =(restaurant)=> ansatte.filter(ansatte => ansatte.restaurant === restaurant);
    const getEmployeeByAnr =(anr)=> ansatte.filter(ansatte => ansatte.anr === anr);
    const addEmployee = (newName, newAnr, newRestaurant, newPercentage, newPosition, newStatus, newImage) => ansatte.push({name:newName, anr:newAnr, restaurant:newRestaurant, percentage:newPercentage, position:newPosition, status:newStatus, image:newImage}) 

    const printemployee =(ansatt)=> {
        
        const backgroundColor = checkColor(ansatt.position, ansatt.status)

        function checkColor(position, status){
            if(status.toLowerCase() === "working"){
                if(position.toLowerCase() === "daglig leder"){
                    return "green-background"
                }
                return "yellow-background"
            }
            return "red-background"
        }

        return `

    <!-- ANSATT-KORT -->
    <div class="card card-size card-padding">

        <!-- Stillingstittel -->
        <div class="card-header">
            <p class="${backgroundColor} card-header-title">
                ${ansatt.position.toUpperCase()}
            </p>
        </div>

        <!-- Profilbilde -->
        <div class="card-image">
            <figure class="circular-portrait image">
                <img src="../images/people/${ansatt.image}" alt="profile picture of employee, ${ansatt.name}">
            </figure>
        </div>

        <!-- Navn og ansattnummer-->
        <div class="card-content-size card-content">
            <p class="title is-4">${ansatt.name}</p>
            <p class="subtitle is-6">${ansatt.anr}</p>
        </div>

        <!-- Stillingsprosent -->
        <div class="information-content">
            ${ansatt.percentage}%
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <a href="#" class="card-footer-item">Info</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </div>
    </div>
   
        `} 

        return{getAllEmployees, getEmployeeByAnr, getEmployeeByRestaurant, printemployee, addEmployee}
}()

export default AnsattModule;