function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const textInput = document.querySelectorAll(".text-control");
const checkboxInput = document.querySelectorAll(".checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function testPrenom(formulaire) {
  let prenom = formulaire.first;
  let prenomRegexp = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,20}/g;
  let erreur = "Veuillez renseigner votre prénom."

  if (!prenom.value.match(prenomRegexp))
  {
    document.getElementById("error-first").innerText = erreur;
    document.getElementById("error-first").style.removeProperty("display");
    document.getElementById("first").classList.add("errorBorder");
    return false;
  } else {
    document.getElementById("error-first").style.display="none";
    document.getElementById("first").classList.remove("errorBorder");
    return true
  }
}

function testNom(formulaire) {
  let nom = formulaire.last;
  let nomRegexp = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,20}/g;
  let erreur = "Veuillez renseigner votre nom."

  if (!nom.value.match(nomRegexp))
  {
    document.getElementById("error-last").innerText = erreur
    document.getElementById("error-last").style.removeProperty("display");
    document.getElementById("last").classList.add("errorBorder");
    return false;
  } else {
    document.getElementById("error-last").style.display = "none";
    document.getElementById("last").classList.remove("errorBorder");
    return true
  }
}

function testEmail(formulaire) {
  let email = formulaire.email;
  let emailRegexp = /[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)/g;
  let erreur = "Veuillez renseigner votre adresse email."

  if (!email.value.match(emailRegexp))
  {
    document.getElementById("error-email").innerText = erreur
    document.getElementById("error-email").style.removeProperty("display");
    document.getElementById("email").classList.add("errorBorder");
    return false;
  } else {
    document.getElementById("error-email").style.display = "none";
    document.getElementById("email").classList.remove("errorBorder");
    return true;
  }
}

function testDateNaissance(formulaire) {
  let dateNaissance = formulaire.birthdate;
  let dateNaissanceRegexp = /(?:1[6-9]|[2-9]\d)/;
  let erreur = "Veuillez renseigner votre date de naissance."

  if (!dateNaissance.value.match(dateNaissanceRegexp))
  {
    document.getElementById("error-birthdate").innerText = erreur
    document.getElementById("error-birthdate").style.removeProperty("display");
    document.getElementById("birthdate").classList.add("errorBorder");
    return false;
  } else {
    document.getElementById("error-birthdate").style.display = "none";
    document.getElementById("birthdate").classList.remove("errorBorder");
    return true;
  }
}

function testNombreTournois(formulaire) {
  let nombreTournois = formulaire.quantity;
  let nombreTournoisRegexp = /[0-9]{1,3}/;
  let erreur = "Veuillez saisir une valeur."

  if (!nombreTournois.value.match(nombreTournoisRegexp))
  {
    document.getElementById("error-quantity").innerText = erreur
    document.getElementById("error-quantity").style.removeProperty("display");
    document.getElementById("quantity").classList.add("errorBorder");
    return false;
  } else {
    document.getElementById("error-quantity").style.display = "none";
    document.getElementById("quantity").classList.remove("errorBorder");
    return true;
  }
}

function testLieuTournoi(formulaire) {
  let lieuTournoi = formulaire.querySelector('input[name="location"]:checked');
  let erreur = "Veuillez saisir un lieu."

  if (lieuTournoi == null)
  {
    document.getElementById("error-location").innerText = erreur
    document.getElementById("error-location").style.removeProperty("display");
    for (let i=0; i<6; i++) {
    document.getElementsByClassName("checkbox-icon")[i].style.borderColor = "#fe142f";
    }
    return false;
  } else {
    document.getElementById("error-location").style.display = "none";
    for (let i=0; i<6; i++) {
    document.getElementsByClassName("checkbox-icon")[i].style.borderColor = '';
    }
    return true;
  }
}

function testConditions(formulaire) {
  let conditions = document.getElementById("checkbox1");
  let erreur = "Veuillez accepter les conditions d'utilisation."

  if (conditions.checked == false)
  {
    document.getElementById("error-checkbox1").innerText = erreur
    document.getElementById("error-checkbox1").style.removeProperty("display");
    return false;
  } else {
    document.getElementById("error-checkbox1").style.display = "none";
    return true;
  }
}

// Déroule les différentes fonctions qui servent de cas de tests
function testFormulaire ()
{
  testPrenom(formulaire)
  testNom(formulaire)
  testEmail(formulaire)
  testDateNaissance(formulaire)
  testNombreTournois(formulaire)
  testLieuTournoi(formulaire)
  testConditions(formulaire)
}

// Vérifie que l'ensemble des champs soit correctement renseigné
function validationFormulaire ()
{
  if(
  testPrenom(formulaire)
  && testNom(formulaire)
  && testEmail(formulaire)
  && testDateNaissance(formulaire)
  && testNombreTournois(formulaire)
  && testLieuTournoi(formulaire)
  && testConditions(formulaire)
  === true) {
    return true
  }
}

// Réinitialise le formulaire
function resetFormulaire ()
{
  // Purge les champs de texte
  Array.from(textInput).forEach(function(valeur){
    valeur.value = ""
  });
  // Purge les boutons radio
  Array.from(checkboxInput).forEach(function(valeur){
    valeur.checked = false
    console.log(valeur.value)
  });
}


const formulaire = document.forms.reserve

formulaire.addEventListener("submit", (event) => {
  event.preventDefault()
  console.log("Envoyer")
  testFormulaire()
  if (validationFormulaire(formulaire) === true) {
    // Change le texte du bouton de validation
    document.getElementById("validation").value = "Fermer";
    // Pour chaque .formData, les rend "invisible"
    Array.from(formData).forEach(function(valeur){
      valeur.style.visibility = "hidden";
    });
    // Fait apparaître le texte de remerciement pour l'inscription
    document.getElementById("confirmation").style.removeProperty("display")
    resetFormulaire()
  // } else {
  //   console.log("KO")
  }
});

// Fermer modal via bouton
const boutonFermeture = document.querySelectorAll(".close");

function fermerModal() {
  modalbg.style.display = "none";
}

boutonFermeture[0].addEventListener ("click", fermerModal);