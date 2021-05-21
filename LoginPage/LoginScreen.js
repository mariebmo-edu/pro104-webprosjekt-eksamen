// Admin brukerens brukernavn og passord
const adminbrukernavn = "brukernavn123";
const adminpassord = "passord123";


//Henter og får knappen til å gjøre noe
document.querySelector('#loginBtn').addEventListener('click', function() {

    const username = document.querySelector('#usernameField').value;
    const password = document.querySelector('#passwordField').value;

    if(username == adminbrukernavn && password == adminpassord){
        window.location.replace("https://www.google.com/search?q=scarlett+johansson");
    } else{
        alert("Incorret brukernavn eller passord");
        
    }
    
});

