const table = document.querySelector("#tableauLivres");
setTimeout(function () {
  console.log(table);
}, 10000);

var livre1 = {
  nom: "La boite de Pandore",
  auteur: "Bernard Werber",
  pages: 576,
};
var livre2 = {
  nom: "Le sixième sommeil",
  auteur: "Bernard Werber",
  pages: 504,
};
var livre3 = {
  nom: "La prophétie des abeilles",
  auteur: "Bernard Werber",
  pages: 648,
};
var livre4 = {
  nom: "La diagonale des reines",
  auteur: "Bernard Werber",
  pages: 504,
};

var biblio = [livre1, livre2, livre3, livre4];

afficherLivres();

function afficherLivres() {
  var tableauLivres = document.querySelector("#tableauLivres tbody");
  var livres = "";
  for (i = 0; i <= biblio.length - 1; i++) {
    livres += `<tr>
                <td>${biblio[i].nom}</td>
                <td>${biblio[i].auteur}</td>
                <td>${biblio[i].pages}</td> 
                <td><button class="btn btn-warning" onClick="afficherFormModification(${i})">Modifier</button></td>
                <td><button class="btn btn-danger" onClick="supprimerLivre(${i})">Supprimer</button></td>
               <tr/>`;
  }
  tableauLivres.innerHTML = livres;
}

//Création d'un formulaire pour l'ajout d'un livre
function ajoutFormulaire() {
  document.querySelector("#ajoutForm").removeAttribute("class");
  document.querySelector("#modifForm").className = 'd-none';
}

//Gestion de l'event
document
  .querySelector("#validationFormAjout")
  .addEventListener("click", function (event) {
    event.preventDefault(); //Le formulaire ne se soumet plus
    var titre = document.querySelector("#ajoutForm #titre").value;
    var auteur = document.querySelector("#ajoutForm #auteur").value;
    var pages = document.querySelector("#ajoutForm #pages").value;
    console.log(titre);

    ajoutLivre(titre, auteur, pages);

    const formulaire = document.querySelector("#ajoutForm");
    formulaire.reset();
    formulaire.className = 'd-none';
  });


// Ajouter un livre
function ajoutLivre(titre, auteur, pages) {
  var livre = {
    nom: titre,
    auteur: auteur,
    pages: pages,
  };
  biblio.push(livre);
  afficherLivres();
}

//Supprimer un livre
function supprimerLivre(position) {
  if(confirm("Voulez-vous vraiment supprimer ?")) {
    console.log("La position est : " + position);
  biblio.splice(position, 1);
  afficherLivres();
  alert("Suppression effectuée")
  } else {
    alert("Suppression annulée");
  }
  
}

//Modifier un livre 
function afficherFormModification(position) {
  document.querySelector("#ajoutForm").className='d-none';

  document.querySelector("#modifForm").removeAttribute("class");
  document.querySelector("#modifForm #titre").value = biblio[position].nom;
  document.querySelector("#modifForm #auteur").value = biblio[position].auteur;
  document.querySelector("#modifForm #pages").value = biblio[position].pages;
  document.querySelector("#modifForm #idLivre").value = position;
  console.log(position);
}

//Une fois le formulaire soumis, je modifie les valeur dans l'objet pour prendre
//en compte les modifications

document.querySelector("#validationFormModif").addEventListener("click", function(event){
  event.preventDefault();
  var titre = document.querySelector("#modifForm #titre").value;
  var auteur = document.querySelector("#modifForm #auteur").value;
  var pages = document.querySelector("#modifForm #pages").value;
  var idLivre = document.querySelector("#modifForm #idLivre").value;

  biblio[idLivre].nom = titre;
  biblio[idLivre].auteur = auteur;
  biblio[idLivre].pages = pages;
  afficherLivres();
  document.querySelector("#modifForm").className = 'd-none';
})

 