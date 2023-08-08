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
// Constante qui récupère le formulaire nommé "reserve"
const formulaire = document.forms.reserve
// Constante qui liste l'ensemble des classes ".text-control"
const textInput = document.querySelectorAll(".text-control");
// Constante qui liste l'ensemble des classes ".checkbox-input"
const checkboxInput = document.querySelectorAll(".checkbox-input");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Fonctions testant les différents champs du formulaire
function testPrenom(formulaire) {
  let prenom = formulaire.first.value.trim();
  // console.log(prenom,prenom.value.trim())
  let prenomRegexp = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,20}/g;
  let erreur = "Veuillez renseigner votre prénom."

  if (!prenom.match(prenomRegexp))
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
  let nom = formulaire.last.value.trim();
  let nomRegexp = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,20}/g;
  let erreur = "Veuillez renseigner votre nom."

  if (!nom.match(nomRegexp))
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
  let email = formulaire.email.value.trim();
  let emailRegexp = /[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)/g;
  let erreur = "Veuillez renseigner votre adresse email."

  if (!email.match(emailRegexp))
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
  const checkboxes = document.getElementsByClassName("checkbox-icon")

  if (lieuTournoi == null)
  {
    document.getElementById("error-location").innerText = erreur
    document.getElementById("error-location").style.removeProperty("display");
    for (let checkbox of checkboxes) {
      checkbox.style.borderColor = "#fe142f";
    }
    return false;
  } else {
    document.getElementById("error-location").style.display = "none";
    for (let checkbox of checkboxes) {
      checkbox.style.borderColor = "";
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

// Vérifie que l'ensemble des champs soit correctement renseigné
function validationFormulaire ()
{
  let result = testPrenom(formulaire)
  result = testNom(formulaire) && result
  result = testEmail(formulaire) && result
  result = testDateNaissance(formulaire) && result
  result = testNombreTournois(formulaire) && result
  result = testLieuTournoi(formulaire) && result
  result = testConditions(formulaire) && result
  return result
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


// Ecoute l'appui sur le bouton de validation du formulaire
formulaire.addEventListener("submit", (event) => {
// Bloque l'action par défaut lors de l'appui sur le bouton
  event.preventDefault()
// Contrôle que l'appui sur le bouton est effectif
  console.log("Envoyer")
// Condition des action à réaliser selon le renseignement correct du formulaire ou non
  if (validationFormulaire(formulaire) === true) {
    const btnclose = document.getElementById("validation")
    // Change le texte du bouton de validation
    btnclose.value = "Fermer";
    // Ferme le formulaire
    btnclose.addEventListener ("click", fermerModal);
    // Rend invisible chaque .formData
    Array.from(formData).forEach(function(valeur){
      valeur.style.visibility = "hidden";
    });
    // Fait apparaître le texte de remerciement pour l'inscription
    document.getElementById("confirmation").style.removeProperty("display")
    resetFormulaire()
  }
});

// Fermer modal via bouton
const boutonFermeture = document.querySelectorAll(".close");

function fermerModal() {
  modalbg.style.display = "none";
}

boutonFermeture[0].addEventListener ("click", fermerModal);