import AnsattModule from '../Modules/AnsattModule.js';

const ansattNavn = document.querySelector('#ansattNavnInput');
const avdelingsNavn = document.querySelector('#avdelingsMenu');
const stillingsNavn = document.querySelector('#stillingsMenu');
// [avdelingsNavn/stillingsNavn].options[avdelingsNavn/stillingsNavn.selectedIndex].text;
// for å hente det som er valgt i selve valg boksen^

const searchResultDiv = document.querySelector('#layoutAndAnsatt');