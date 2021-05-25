import AnsattModule from '../Modules/AnsattModule.js';

const ansattNavn = document.querySelector('#ansattNavnInput');
const avdelingsNavn = document.querySelector('#avdelingsMenu');
const stillingsNavn = document.querySelector('#stillingsMenu');
// [avdelingsNavn/stillingsNavn].options[avdelingsNavn/stillingsNavn.selectedIndex].text;
// for å hente det som er valgt i selve valg boksen^

//Henter container for layout til .innerHTML
const searchResultDiv = document.querySelector('#layoutAndAnsatt');

let htmlAnsattTxt= "";

// Genererer Siden på start med alle avdelings layout + ansatte       ------- HTML Startup ------ 

const HTMLStartUp = () => {

  for(var i = 0; i < 3; i++){
  
    var avdeling = checkNumber(i);
    
    function checkNumber(i){
      if(i == 0){
        return "Oslo"
      } else if (i == 1){
        return "Bergen"
      } else if (i == 2){
        return "Stavanger"
      }
    }

      // Printer Layout for hver avdeling
    htmlAnsattTxt += `<div id="layoutAndAnsatt">
  
          <div class="columns mt-2"> <!-- Topdelen av layoutet -->
            <div class="column is-half is-offset-1">
              <p class="has-text-weight-bold"> ${avdeling} <span class="is-pulled-right">[Legg til]</span></p>
              <hr style="border-top: 1px solid black;">
            </div>
          </div>
          <div class="columns"><!-- Kortene av ansatte -->
            <!-- ANSATT-KORT [alt under er fjernet]-->
            
          `;

      // Printer ansatte for tilhørende avdeling

      const ansatte = AnsattModule.getEmployeeByRestaurant(avdeling);
      
      ansatte.forEach(ansatt => {

        htmlAnsattTxt += AnsattModule.printemployee(ansatt); 

      })

    //Brukes for å lukke columns
    htmlAnsattTxt += `
    </div>
    `;

  }
  
  searchResultDiv.innerHTML = htmlAnsattTxt;

}

HTMLStartUp();


//                                                                    ------- HTML Startup End -------
// Array med alle ansatte
var ansattArray = AnsattModule.getAllEmployees();

// Henter knappen og får knappen til å gjøre noe          ----- KNAPP START -----
document.querySelector('#searchBtn').addEventListener('click', function() {

    // inni her er det som skjer når knappen er trykket på
    htmlAnsattTxt ="";

    //Lager HOVEDLAYOUT for det som er valgt i AVDELING dropdown menu
    //Når ingen AVDELING er valgt i AVDELING
    if("Alle Avdelinger" == avdelingsNavn.options[avdelingsNavn.selectedIndex].text){
        
        htmlAnsattTxt += `<div id="layoutAndAnsatt">

        <div class="columns mt-2"> <!-- Topdelen av layoutet -->
          <div class="column is-half is-offset-1">
            <p class="has-text-weight-bold"> ${avdelingsNavn.options[avdelingsNavn.selectedIndex].text} <span class="is-pulled-right">[Legg til]</span></p>
            <hr style="border-top: 1px solid black;">
          </div>
        </div>
        <div class="columns"><!-- Kortene av ansatte -->
          <!-- ANSATT-KORT [alt under er fjernet]-->
        `;

    //Når en AVDELING valgt i AVDELING    
    } else {
       
        htmlAnsattTxt += `<div class="columns mt-2"> <!-- Topdelen av layoutet -->
        <div class="column is-half is-offset-1">
        <p class="has-text-weight-bold"> ${avdelingsNavn.options[avdelingsNavn.selectedIndex].text} <span class="is-pulled-right">[Legg til]</span></p>
        <hr style="border-top: 1px solid black;">
        </div>
    </div>
    <div class="columns is-multiline"><!-- Kortene av ansatte -->
        <!-- ANSATT-KORT [alt under er fjernet]-->
    `;
    }
    
    
    // Filter funksjoner for søke options!                            ----- FILTER START -----
    console.log(ansattArray);
    
    //Array med ansatte basert på STILLING
    var ansattStillingArray = [];
    
    stillingsFilter(ansattArray);
    function stillingsFilter(Array){
      for(var i = 0; i < Array.length; i++){
        if(Array[i].position.includes(stillingsNavn.options[stillingsNavn.selectedIndex].text) || "Alle Stillinger" === stillingsNavn.options[stillingsNavn.selectedIndex].text){
          
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
    
    var ansattNavnArray = [];
    
    navnFilter(ansattAvdelingsArray)
    function navnFilter(Array){
      for(var i = 0; i < ansattAvdelingsArray.length; i++){
        if(Array[i].name.toLowerCase().includes(ansattNavn.value.toLowerCase()) ){
          
          ansattNavnArray.push(Array[i]);
        }
      }
    }
    console.log(ansattNavnArray);
    // ^ansattNavnArray^ inneholder filtrert resultat basert på alle feltene!!!     ----- FILTER SLUTT -----

    // Skriver inn ANSATTE etter søk har filtrert ansatte basert på valgte options
    ansattNavnArray.forEach(ansatte =>{
      
      htmlAnsattTxt +=
      AnsattModule.printemployee(ansatte);
    })
    
    
    //Brukes for å lukke columns
    htmlAnsattTxt += `
    </div>
    `;
    
    searchResultDiv.innerHTML = htmlAnsattTxt;
    
    //For å resete arrays
    ansattStillingArray = [];
    ansattAvdelingsArray = [];
    ansattNavnArray = [];
  }); // Slutten av knappen             ----- KNAPP SLUTT -----
  ///////////////////////
