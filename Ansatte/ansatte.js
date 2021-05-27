import AnsattModule from '../Modules/AnsattModule.js';
import LayoutModule from '../Modules/LayoutModule.js'

const employeeName = document.querySelector('#ansattNavnInput');
const avdelingsNavn = document.querySelector('#avdelingsMenu');
const positionName = document.querySelector('#stillingsMenu');
const popUpContainer = document.getElementById("popUpContainer");
// [avdelingsNavn/positionName].options[avdelingsNavn/positionName.selectedIndex].text;
// for å hente det som er valgt i selve valg boksen^

//For å generere topp- og sidebar
const topAndSideBar = document.getElementById("topAndSideBar");
topAndSideBar.innerHTML = LayoutModule.printBaseLayout("Ansatte");

//Henter container for layout til .innerHTML
const searchResultDiv = document.querySelector('#layoutAndEmployee');

let htmlEmployeeTxt= "";

// Genererer Siden på start med alle avdelings layout + ansatte       ------- HTML Startup ------ 

const HTMLStartUp = () => {

  for(var i = 0; i < 4; i++){
  
    var avdeling = checkNumber(i);
    
    function checkNumber(i){
      if(i == 0){
        return "Oslo"
      } else if (i == 1){
        return "Bergen"
      } else if (i == 2){
        return "Stavanger"
      } else if (i == 3){
        return "Kristiansand"
      }
    }

      // Printer Layout for hver avdeling
      htmlEmployeeTxt += `
  
          <div class="columns mt-2"> <!-- Topdelen av layoutet -->
            <div class="column is-full">
              <p class="has-text-weight-bold"> ${avdeling} <span id="add${avdeling}Employee" class="button is-pulled-right">[Legg til]</span></p>
              <hr style="border-top: 1px solid black;">
            </div>
          </div>
          <div id="${avdeling}Container" class="columns is-multiline ml-5"><!-- Kortene av ansatte -->
            <!-- ANSATT-KORT [alt under er fjernet]-->
            
          `;

      // Printer ansatte for tilhørende avdeling

      const ansatte = AnsattModule.getEmployeeByRestaurant(avdeling);
      
      ansatte.forEach(ansatt => {

        htmlEmployeeTxt += AnsattModule.printemployee(ansatt); 

      })

    //Brukes for å lukke columns
    htmlEmployeeTxt += `
    </div>
    `;

  }
  
  searchResultDiv.innerHTML = htmlEmployeeTxt;

}

HTMLStartUp();
//                                                                    ------- HTML Startup End -------


// Array med alle ansatte
var ansattArray = AnsattModule.getAllEmployees();

// Henter knappen og får knappen til å gjøre noe          ----- KNAPP START -----
document.querySelector('#searchBtn').addEventListener('click', function() {

    // inni her er det som skjer når knappen er trykket på
    htmlEmployeeTxt ="";

    //Lager HOVEDLAYOUT for det som er valgt i AVDELING dropdown menu
       
    htmlEmployeeTxt += `
    
    <div class="columns mt-2"> <!-- Topdelen av layoutet -->
      <div class="column is-half is-offset-1">
        <p class="has-text-weight-bold"> ${avdelingsNavn.options[avdelingsNavn.selectedIndex].text} <span id="addEmployee" class="button is-pulled-right">[Legg til]</span></p>
        <hr style="border-top: 1px solid black;">
      </div>
    </div>
    <div id="employeesContainer" class="columns is-multiline ml-5"><!-- Kortene av ansatte -->
      <!-- ANSATT-KORT [alt under er fjernet]-->
    `;

    // Filter funksjoner for søke options!                                     ----- FILTER START -----
    console.log(ansattArray);
    
    //Array med ansatte basert på STILLING
    var ansattStillingArray = [];
    
    stillingsFilter(ansattArray);
    function stillingsFilter(Array){
      for(var i = 0; i < Array.length; i++){
        if(Array[i].position.toLowerCase().includes(positionName.options[positionName.selectedIndex].text.toLowerCase()) || "Alle Stillinger" === positionName.options[positionName.selectedIndex].text){
          
          ansattStillingArray.push(Array[i]);
        }
      }
    }
    console.log(ansattStillingArray);
    
    
    var ansattAvdelingsArray = [];
    
    avdelingsFilter(ansattStillingArray);
    function avdelingsFilter(Array){
      for(var i = 0; i < ansattStillingArray.length; i++){
        if(Array[i].restaurant.includes(avdelingsNavn.options[avdelingsNavn.selectedIndex].text) || "Alle Avdelinger" === avdelingsNavn.options[avdelingsNavn.selectedIndex].text){
          
          ansattAvdelingsArray.push(Array[i]);
        }
      }
    }
    
    var employeeNameArray = [];
    
    navnFilter(ansattAvdelingsArray)
    function navnFilter(Array){
      for(var i = 0; i < ansattAvdelingsArray.length; i++){
        if(Array[i].name.toLowerCase().includes(employeeName.value.toLowerCase()) ){
          
          employeeNameArray.push(Array[i]);
        }
      }
    }
    console.log(employeeNameArray);
    // ^employeeNameArray^ inneholder filtrert resultat basert på alle feltene!!!     ----- FILTER SLUTT -----

    // Skriver inn ANSATTE etter søk har filtrert ansatte basert på valgte options
    employeeNameArray.forEach(ansatte =>{
      
      htmlEmployeeTxt +=
      AnsattModule.printemployee(ansatte);
    })
    
    
    //Brukes for å lukke columns
    htmlEmployeeTxt += `
    </div>
    `;
    
    searchResultDiv.innerHTML = htmlEmployeeTxt;
    
    //For å resete arrays
    ansattStillingArray = [];
    ansattAvdelingsArray = [];
    employeeNameArray = [];

    let employeesDiv = document.querySelector('#employeesContainer');
    document.querySelector('#addEmployee').addEventListener('click', function(){

      popUpContainer.innerHTML = newEmployeePopUp();
      addEmployee(employeesDiv, "oslo"); // Kan ikke legge til ny ansatt til en annen avdeling enn den en har oppe uten at den legges til for øyeblikket i feil avdeling derfor er OSLO default :c
    })

    
  }); // Slutten av søk knappen                          ----- KNAPP SLUTT -----


  // Henter å får hver LEGG TIL knapp til å gjøre noe     ----- LEGG TIL ANSATT KNAPP START -----
  //Leggtil for Oslo
  const osloDiv = document.querySelector("#OsloContainer");
  document.querySelector('#addOsloEmployee').addEventListener('click', function() {
  
  popUpContainer.innerHTML = newEmployeePopUp();
  addEmployee(osloDiv, "Oslo"); 
  })

  //Leggtil for Bergen
  const bergenDiv = document.querySelector("#BergenContainer");
  document.querySelector('#addBergenEmployee').addEventListener('click', function() {
  
  popUpContainer.innerHTML = newEmployeePopUp();
  addEmployee(bergenDiv, "Bergen"); 
  })

  //Leggtil for Kristiansand
  const kristiansandDiv = document.querySelector('#KristiansandContainer');
  document.querySelector('#addKristiansandEmployee').addEventListener('click', function() {
  
  popUpContainer.innerHTML = newEmployeePopUp();
  addEmployee(kristiansandDiv, "Kristiansand");
  })

  //Leggtil for Stavanger
  const stavangerDiv = document.querySelector('#StavangerContainer');
  document.querySelector('#addStavangerEmployee').addEventListener('click', function() {
  
  popUpContainer.innerHTML = newEmployeePopUp();
  addEmployee(stavangerDiv, "Stavanger");
  })


  function newEmployeePopUp(){
    return `<div class="card pop-up-card">
            <div class="title card-title-padding card-header">
                LEGG TIL ANSATT
            </div>
            <div class="card-content">
                <input type="text" id="addEmployeeNameField" placeholder="Navn på Ansatt" value="" class="input">
                <input type="text" id="addEmployeePositionField" placeholder="Stilling" value="" class="input">
                <input type="text" id="addEmployeeNumberField" placeholder="Ansatt Nr" value="" class="input">
                <input type="text" id="addEmployeePercentField" placeholder="Stillings Prosent" value="" class="input">
                <button id="submitEmployeePopUpBtn" value="submitNewEmployee" class="button">LEGG TIL</button>
            </div>
        </div>
        `
  }

  function addEmployee(divContainer, Avdeling){
    document.querySelector('#submitEmployeePopUpBtn').addEventListener('click', function(){

      let addEmployeeName = document.getElementById("addEmployeeNameField").value;
      let addEmployeePosition = document.getElementById("addEmployeePositionField").value;
      let addEmployeeNumber = document.getElementById("addEmployeeNumberField").value;
      let addEmployeePercent = document.getElementById("addEmployeePercentField").value;

      AnsattModule.addEmployee(addEmployeeName, addEmployeeNumber, Avdeling, addEmployeePercent, addEmployeePosition, "working", "");

      let newestEmployee = AnsattModule.getAllEmployees()[AnsattModule.getAllEmployees().length - 1];

      divContainer.innerHTML += AnsattModule.printemployee(newestEmployee); 

      popUpContainer.innerHTML = "";


    })

  }

  // Slutten av legg til knapp                          ----- LEGG TIL ANSATT KNAPP SLUTT -----