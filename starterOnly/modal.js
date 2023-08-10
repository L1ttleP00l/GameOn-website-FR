// Fait apparaître le menu de navigation lorsque l'on clique sur le bouton "burger" en mode smartphone
function editNav() {
  // var x = document.getElementById("myTopnav");
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
// Constante qui récupère le fond translucide à l'ouverture du formulaire
const modalbg = document.querySelector(".bground");
// Constante qui récupère le bouton d'ouverture du formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
// Constante qui récupère l'ensemble des zones à renseigner du formulaire
const formData = document.querySelectorAll(".formData");
// Constante qui récupère le formulaire nommé "reserve"
const formulaire = document.forms.reserve
// Constante qui liste l'ensemble des classes ".text-control"
const textInput = document.querySelectorAll(".text-control");
// Constante qui liste l'ensemble des classes ".checkbox-input"
const checkboxInput = document.querySelectorAll(".checkbox-input");

// launch modal event
// Ecoute le bouton d'ouverture du formulaire. Si celui-ci est cliqué alors il exécute la fonction "launchModal"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
// Fonction qui affiche le formulaire via un display = "block"
function launchModal() {
  modalbg.style.display = "block";
}
// Fonctions testant les différents champs du formulaire
function testPrenom(formulaire) {
  // Variable qui récupère la valeur du champs prénom en retirant les blancs en début et fin de chaîne
  let prenom = formulaire.first.value.trim();
  // console.log(prenom,prenom.value.trim())
  // Variable qui contient l'expression régulière à utiliser
  let prenomRegexp = /[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,20}/g;
  // Variable du message d'erreur à afficher
  let erreur = "Veuillez renseigner votre prénom."

  // Si la valeur du prénom ne respecte pas l'expression régulière
  if (!prenom.match(prenomRegexp))
  {
    // Récupère l'id du message d'erreur et on lui insère le texte contenu dans la variable "erreur"
    document.getElementById("error-first").innerText = erreur;
    // Retire la propriété "display" du HTML pour rendre visible le message d'erreur
    document.getElementById("error-first").style.removeProperty("display");
    // Récupère l'id first correspondant au champ à renseigner et on lui applique la classe CSS "errorBorder" afin de faire apparaître le contour rouge
    document.getElementById("first").classList.add("errorBorder");
    // Fin d'exécution et retourne la valeur "false"
    return false;
  } else {
    // Laisse ou rend de nouveau invisible le message d'erreur
    document.getElementById("error-first").style.display="none";
    // Laisse ou retire de nouveau le contour rouge autour du champs à renseigner
    document.getElementById("first").classList.remove("errorBorder");
    // Fin d'exécution et retourne la valeur "true"
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
  let nombreTournoisRegexp = /^[0-9]{1,3}/;
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
  // Variable "result" à pour valeur ce que retourne la fonction "testPrenom"
  let result = testPrenom(formulaire)
  // Variable "result" à pour valeur ce que retourne la fonction "testNom" && la précédente valeur qui doivent être "true"
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
    // console.log(valeur.value)
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
    // Constante qui récupère l'id du bouton de validation
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

// Constante qui récupère le bouton de fermeture du formulaire
const boutonFermeture = document.querySelector(".close");

// Fonction qui cache le formulaire via un display = "none"
function fermerModal() {
  modalbg.style.display = "none";
}

// Ecoute le bouton de fermeture du formulaire. Si celui-ci est cliqué alors il exécute la fonction "FermerModal"
boutonFermeture.addEventListener ("click", fermerModal);