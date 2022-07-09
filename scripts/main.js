/* Bouton pour lancer une partie */
let boutonJouer = document.querySelector('#boutonJouer');

/* Bouton pour retourner au menu principal */
let boutonRetour = document.querySelector('#boutonRetour');
boutonRetour.hidden = true;

/* Boutons de sélection du nombre de joueurs */
let bouton1 = document.querySelector('#bouton1');
bouton1.hidden = true;
let bouton2 = document.querySelector('#bouton2');
bouton2.hidden = true;
let bouton3 = document.querySelector('#bouton3');
bouton3.hidden = true;
let bouton4 = document.querySelector('#bouton4');
bouton4.hidden = true;
let bouton5 = document.querySelector('#bouton5');
bouton5.hidden = true;
let bouton6 = document.querySelector('#bouton6');
bouton6.hidden = true;
let bouton7 = document.querySelector('#bouton7');
bouton7.hidden = true;
let bouton8 = document.querySelector('#bouton8');
bouton8.hidden = true;
let bouton9 = document.querySelector('#bouton9');
bouton9.hidden = true;
let bouton10 = document.querySelector('#bouton10');
bouton10.hidden = true;
let bouton11 = document.querySelector('#bouton11');
bouton11.hidden = true;
let bouton12 = document.querySelector('#bouton12');
bouton12.hidden = true;

/* Titre de la page */
let titre = document.querySelector('h1');

/* Paragraphes présents sur la page */
let paragraphe1 = document.querySelector('#paragraphe1');
let paragraphe2 = document.querySelector('#paragraphe2');
let paragraphe3 = document.querySelector('#paragraphe3');

/* Liste de la page */
let liste = document.querySelector('ul');

/* Eléments de la liste */
let li1 = document.querySelector('#li1');
let li2 = document.querySelector('#li2');
let li3 = document.querySelector('#li3');
let li4 = document.querySelector('#li4');
let li5 = document.querySelector('#li5');
let li6 = document.querySelector('#li6');
let li7 = document.querySelector('#li7');
let li8 = document.querySelector('#li8');
let li9 = document.querySelector('#li9');
let li10 = document.querySelector('#li10');
let li11 = document.querySelector('#li11');
let li12 = document.querySelector('#li12');

/* Ajout d'une action au bouton jouer */
boutonJouer.addEventListener('click', function() {
    titre.textContent = 'Choix du nombre de joueurs';
    paragraphe1.textContent = '';
    liste.textContent = '';
    paragraphe2.textContent = '';
    paragraphe3.textContent = '';
    boutonJouer.hidden = true;
    bouton1.hidden = false;
    bouton2.hidden = false;
    bouton3.hidden = false;
    bouton4.hidden = false;
    bouton5.hidden = false;
    bouton6.hidden = false;
    bouton7.hidden = false;
    bouton8.hidden = false;
    bouton9.hidden = false;
    bouton10.hidden = false;
    bouton11.hidden = false;
    bouton12.hidden = false;
    boutonRetour.hidden = false;
});

/* Ajout d'une action au bouton retour */
boutonRetour.addEventListener('click', function() {
    titre.textContent = 'Jeu Kobaladream'
    paragraphe1.textContent = "Vous êtes actuellement sur la page d'accueil du jeu Kobaladream. Ce jeu est un jeu d'alcool qui vous permettra d'incarner un des personnages suivants :";
    liste.appendChild(li1);
    liste.appendChild(li2);
    liste.appendChild(li3);
    liste.appendChild(li4);
    liste.appendChild(li5);
    liste.appendChild(li6);
    liste.appendChild(li7);
    liste.appendChild(li8);
    liste.appendChild(li9);
    liste.appendChild(li10);
    liste.appendChild(li11);
    liste.appendChild(li12);
    paragraphe2.textContent = "le choix de votre personnage détermine l'alcool que vous devrez boire lors de la partie et influencera le nombre de gorgées. Choisissez donc bien votre personnage !";
    paragraphe3.textContent = "Vous pouvez cliquer sur le bouton suivant pour commencer une partie.";
    boutonJouer.hidden = false;
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
})

/* Nombre de joueurs dans la partie */
let nbJoueurs;

/* Joueur actuel */
let Joueur;

/* Personnages sélectionnés par les joueurs */
let persoJoueur1;
let persoJoueur2;
let persoJoueur3;
let persoJoueur4;
let persoJoueur5;
let persoJoueur6;
let persoJoueur7;
let persoJoueur8;
let persoJoueur9;
let persoJoueur10;
let persoJoueur11;
let persoJoueur12;

/* Boutons de sélection des personnages */
let boutonAnat = document.querySelector('#boutonAnat');
boutonAnat.hidden = true;
let boutonAntho = document.querySelector('#boutonAntho');
boutonAntho.hidden = true;
let boutonMathis = document.querySelector('#boutonMathis');
boutonMathis.hidden = true;
let boutonDoume = document.querySelector('#boutonDoume');
boutonDoume.hidden = true;
let boutonLoic = document.querySelector('#boutonLoic');
boutonLoic.hidden = true;
let boutonThib = document.querySelector('#boutonThib');
boutonThib.hidden = true;
let boutonKelvin = document.querySelector('#boutonKelvin');
boutonKelvin.hidden = true;
let boutonNico = document.querySelector('#boutonNico');
boutonNico.hidden = true;
let boutonLeo = document.querySelector('#boutonLeo');
boutonLeo.hidden = true;
let boutonLucien = document.querySelector('#boutonLucien');
boutonLucien.hidden = true;
let boutonGaby = document.querySelector('#boutonGaby');
boutonGaby.hidden = true;
let boutonEttore = document.querySelector('#boutonEttore');
boutonEttore.hidden = true;

/* Bouton retour au menu de sélection du nombre de joueurs */
let boutonRetourJoueurs = document.querySelector('#boutonRetourJoueurs');
boutonRetourJoueurs.hidden = true;

/* Ajout d'une action au bouton1 */
bouton1.addEventListener('click', function() {
    nbJoueurs = 1;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton2 */
bouton2.addEventListener('click', function() {
    nbJoueurs = 2;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton3 */
bouton3.addEventListener('click', function() {
    nbJoueurs = 3;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton4 */
bouton4.addEventListener('click', function() {
    nbJoueurs = 4;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton5 */
bouton5.addEventListener('click', function() {
    nbJoueurs = 5;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton6 */
bouton6.addEventListener('click', function() {
    nbJoueurs = 6;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton7 */
bouton7.addEventListener('click', function() {
    nbJoueurs = 7;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton8 */
bouton8.addEventListener('click', function() {
    nbJoueurs = 8;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton9 */
bouton9.addEventListener('click', function() {
    nbJoueurs = 9;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton10 */
bouton12.addEventListener('click', function() {
    nbJoueurs = 10;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton11 */
bouton11.addEventListener('click', function() {
    nbJoueurs = 11;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton12 */
bouton12.addEventListener('click', function() {
    nbJoueurs = 12;
    Joueur = 1;
    titre.textContent = 'Choix des personnages : joueur 1'
    bouton1.hidden = true;
    bouton2.hidden = true;
    bouton3.hidden = true;
    bouton4.hidden = true;
    bouton5.hidden = true;
    bouton6.hidden = true;
    bouton7.hidden = true;
    bouton8.hidden = true;
    bouton9.hidden = true;
    bouton10.hidden = true;
    bouton11.hidden = true;
    bouton12.hidden = true;
    boutonRetour.hidden = true;
    boutonAnat.hidden = false;
    boutonAntho.hidden = false;
    boutonMathis.hidden = false;
    boutonDoume.hidden = false;
    boutonLoic.hidden = false;
    boutonThib.hidden = false;
    boutonKelvin.hidden = false;
    boutonNico.hidden = false;
    boutonLeo.hidden = false;
    boutonLucien.hidden = false;
    boutonGaby.hidden = false;
    boutonEttore.hidden = false;
    boutonRetourJoueurs.hidden = false;
});

/* Ajout d'une action au bouton retour joueurs */
boutonRetourJoueurs.addEventListener('click', function() {
    titre.textContent = 'Choix du nombre de joueurs';
    bouton1.hidden = false;
    bouton2.hidden = false;
    bouton3.hidden = false;
    bouton4.hidden = false;
    bouton5.hidden = false;
    bouton6.hidden = false;
    bouton7.hidden = false;
    bouton8.hidden = false;
    bouton9.hidden = false;
    bouton10.hidden = false;
    bouton11.hidden = false;
    bouton12.hidden = false;
    boutonRetour.hidden = false;
    boutonAnat.hidden = true;
    boutonAntho.hidden = true;
    boutonMathis.hidden = true;
    boutonDoume.hidden = true;
    boutonLoic.hidden = true;
    boutonThib.hidden = true;
    boutonKelvin.hidden = true;
    boutonNico.hidden = true;
    boutonLeo.hidden = true;
    boutonLucien.hidden = true;
    boutonGaby.hidden = true;
    boutonEttore.hidden = true;
    boutonRetourJoueurs.hidden = true;
});

let joueurs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/* Ajout des évènements aux boutons de sélection des personnages */
boutonAnat.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Anat';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonAnat.disabled = true;
    }
});

boutonAntho.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Antho';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonAntho.disabled = true;
    }
});

boutonMathis.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Mathis';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonMathis.disabled = true;
    }
});

boutonDoume.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Doume';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonDoume.disabled = true;
    }
});

boutonLoic.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Loic';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonLoic.disabled = true;
    }
});

boutonThib.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Thib';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonThib.disabled = true;
    }
});

boutonKelvin.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Kelvin';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonKelvin.disabled = true;
    }
});

boutonNico.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Nico';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonNico.disabled = true;
    }
});

boutonLeo.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Leo';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonLeo.disabled = true;
    }
});

boutonLucien.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Lucien';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonLucien.disabled = true;
    }
});

boutonGaby.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Gaby';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonGaby.disabled = true;
    }
});

boutonEttore.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Ettore';
    Joueur++;
    if (Joueur === nbJoueurs + 1) {
        boutonAnat.hidden = true;
        boutonAntho.hidden = true;
        boutonMathis.hidden = true;
        boutonDoume.hidden = true;
        boutonLoic.hidden = true;
        boutonThib.hidden = true;
        boutonKelvin.hidden = true;
        boutonNico.hidden = true;
        boutonLeo.hidden = true;
        boutonLucien.hidden = true;
        boutonGaby.hidden = true;
        boutonEttore.hidden = true;
        boutonRetourJoueurs.hidden = true;
        titre.textContent = 'Jeu en cours'
    } else {
        boutonEttore.disabled = true;
    }
});
