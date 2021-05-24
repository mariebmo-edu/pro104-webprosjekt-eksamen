import AnsattModule from '../Modules/AnsattModule.js';

const ansattNavn = document.querySelector('#ansattNavnInput');
const avdelingsNavn = document.querySelector('#avdelingsMenu');
const stillingsNavn = document.querySelector('#stillingsMenu');
// [avdelingsNavn/stillingsNavn].options[avdelingsNavn/stillingsNavn.selectedIndex].text;
// for å hente det som er valgt i selve valg boksen^

//Henter container for layout til .innerHTML
const searchResultDiv = document.querySelector('#layoutAndAnsatt');

let htmlAnsattTxt= "";

// Henter knappen og får knappen til å gjøre noe
document.querySelector('#searchBtn').addEventListener('click', function() {

    // inni her er det som skjer når knappen er trykket på
    htmlAnsattTxt ="";

    //Lager HOVEDLAYOUT for det som er valgt i AVDELING dropdown menu
    //Når ingen AVDELING er valgt i AVDELING
    if("Alle Avdelinger" == avdelingsNavn.options[avdelingsNavn.selectedIndex].text){
        window.alert(avdelingsNavn.options[avdelingsNavn.selectedIndex].text + " MÅ FIKSES PÅ!!");
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
        window.alert(avdelingsNavn.options[avdelingsNavn.selectedIndex].text);
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
    
    
    window.alert("Setter in ansatte fra " + avdelingsNavn.options[avdelingsNavn.selectedIndex].text);
    //Setter inn ANSATTE basert på valgte AVDELINGER 
    addAnsatteMedAvdeling();

    //Brukes for å lukke columns
    htmlAnsattTxt += `
        </div>
        `;

    searchResultDiv.innerHTML = htmlAnsattTxt;

}); // Slutten av knappen

//funksjon for å legge til ansatte basert på Avdeling

function addAnsatteMedAvdeling(){
    AnsattModule.getEmployeeByRestaurant(avdelingsNavn.options[avdelingsNavn.selectedIndex].text).forEach(ansatte =>{
          
      htmlAnsattTxt += `
          
      <div class="card card-size ml-4">
            
      <!-- Stillingstittel -->
      <div class="card-header">
        <p class="green-background card-header-title">
          ${ansatte.position}
        </p>
      </div>
      
      <!-- Profilbilde -->
      <div class="card-image">
        <figure class="circular-portrait image">
          <img src="../images/people/${ansatte.image}" alt="profile picture of employee, ${ansatte.name}">
        </figure>
      </div>
      
      <!-- Navn og ansattnummer-->
      <div class="card-content">
        <p class="title is-4">${ansatte.name}</p>
        <p class="subtitle is-6">Anr. ${ansatte.anr}</p>
      </div>
      
      <!-- Stillingsprosent -->
      <div class="information-content">
        ${ansatte.percentage}%
      </div>
      
      <!-- Footer -->
      <div class="card-footer">
        <a href="#" class="card-footer-item">Info</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </div>
      
    </div>
    
  <!-- til hit var det kuttet [må kanskje ha med en /div ?]-->
      `
  })
}

//////



