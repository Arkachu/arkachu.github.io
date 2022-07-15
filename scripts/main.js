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
bouton10.addEventListener('click', function() {
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

let boutonRetourAnat = document.querySelector('#boutonRetourAnat');
boutonRetourAnat.hidden = true;
let boutonRetourAntho = document.querySelector('#boutonRetourAntho');
boutonRetourAntho.hidden = true;
let boutonRetourMathis = document.querySelector('#boutonRetourMathis');
boutonRetourMathis.hidden = true;
let boutonRetourDoume = document.querySelector('#boutonRetourDoume');
boutonRetourDoume.hidden = true;
let boutonRetourLoic = document.querySelector('#boutonRetourLoic');
boutonRetourLoic.hidden = true;
let boutonRetourThib = document.querySelector('#boutonRetourThib');
boutonRetourThib.hidden = true;
let boutonRetourKelvin = document.querySelector('#boutonRetourKelvin');
boutonRetourKelvin.hidden = true;
let boutonRetourNico = document.querySelector('#boutonRetourNico');
boutonRetourNico.hidden = true;
let boutonRetourLeo = document.querySelector('#boutonRetourLeo');
boutonRetourLeo.hidden = true;
let boutonRetourLucien = document.querySelector('#boutonRetourLucien');
boutonRetourLucien.hidden = true;
let boutonRetourGaby = document.querySelector('#boutonRetourGaby');
boutonRetourGaby.hidden = true;
let boutonRetourEttore = document.querySelector('#boutonRetourEttore');
boutonRetourEttore.hidden = true;

/* Permet d'enregistrer les boutons de retour */
let boutonsPrecedents = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
boutonsPrecedents[0] = boutonRetourJoueurs;

/* Image grise pour ne pas décaler lors du premier lancer de dé */
let imgGris = document.querySelector('#imgGris');
imgGris.style.display = 'none';

/* Ajout des évènements aux boutons de sélection des personnages */
boutonAnat.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Anat';
    boutonsPrecedents[Joueur] = boutonRetourAnat;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonAnat.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = false;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonAntho.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Antho';
    boutonsPrecedents[Joueur] = boutonRetourAntho;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonAntho.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = false;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonMathis.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Mathis';
    boutonsPrecedents[Joueur] = boutonRetourMathis;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonMathis.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = false;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonDoume.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Doume';
    boutonsPrecedents[Joueur] = boutonRetourDoume;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonDoume.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = false;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonLoic.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Loic';
    boutonsPrecedents[Joueur] = boutonRetourLoic;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonLoic.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = false;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonThib.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Thib';
    boutonsPrecedents[Joueur] = boutonRetourThib;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonThib.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = false;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonKelvin.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Kelvin';
    boutonsPrecedents[Joueur] = boutonRetourKelvin;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonKelvin.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = false;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonNico.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Nico';
    boutonsPrecedents[Joueur] = boutonRetourNico;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonNico.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = false;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonLeo.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Leo';
    boutonsPrecedents[Joueur] = boutonRetourLeo;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonLeo.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = false;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonLucien.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Lucien';
    boutonsPrecedents[Joueur] = boutonRetourLucien;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonLucien.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = false;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonGaby.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Gaby';
    boutonsPrecedents[Joueur] = boutonRetourGaby;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }
        
        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonGaby.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = false;
        boutonRetourEttore.hidden = true;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

boutonEttore.addEventListener('click', function() {
    joueurs[Joueur - 1] = 'Ettore';
    boutonsPrecedents[Joueur] = boutonRetourEttore;
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
        boutonsPrecedents[Joueur - 2].hidden = true;
        titre.textContent = 'Jeu en cours : tour de ' + joueurs[0];
        
        switch (joueurs[0]) {
            case 'Anat' :
                document.body.style.backgroundImage = "url('images/anat.jpg')";
                break;
            case 'Antho' :
                document.body.style.backgroundImage = "url('images/antho.jpg')";
                break;
            case 'Doume' :
                document.body.style.backgroundImage = "url('images/doume.jpg')";
                break;
            case 'Loic' :
                document.body.style.backgroundImage = "url('images/loic.jpg')";
                break;
            case 'Thib' :
                document.body.style.backgroundImage = "url('images/thib.jpg')";
                break;
            case 'Nico' :
                document.body.style.backgroundImage = "url('images/nico.jpg')";
                break;
            case 'Kelvin' :
                document.body.style.backgroundImage = "url('images/kelvin.jpg')";
                break;
            case 'Leo' :
                document.body.style.backgroundImage = "url('images/leo.jpg')";
                break;
            case 'Lucien' :
                document.body.style.backgroundImage = "url('images/lucien.jpg')";
                break;
            case 'Mathis' :
                document.body.style.backgroundImage = "url('images/mathis.jpg')";
                break;
            case 'Gaby' :
                document.body.style.backgroundImage = "url('images/gaby.jpg')";
                break;
            case 'Ettore' :
                document.body.style.backgroundImage = "url('images/ettore.jpg')";
                break;
        }

        let res = Math.round(Math.random()*5 + 1);
        let event;
        switch (res) {
            case 1 :
                imgDe1.style.display = 'block';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsSoiree.length - 1));
                paragraphe1.textContent = eventsSoiree[event];
                break;
            case 2 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'block';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsAix.length - 1));
                paragraphe1.textContent = eventsAix[event];
                switch (event) {
                    case 5 :
                        if (joueurs[compteur] !== "Loic") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 12 :
                        if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                        case 18 :
                        passe_tour[compteur] = 1;
                        break;
                    case 22 :
                        if (joueurs[compteur] !== "Leo") {
                            passe_tour[compteur] = 1;
                        }
                        break;
                    case 26 :
                        passe_tour[compteur] = 1;
                        break;
                    default :
                        break;
                }
                break;
            case 3 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'block';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsPlage.length - 1));
                paragraphe1.textContent = eventsPlage[event];
                break;
            case 4 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'block';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCamping.length - 1));
                paragraphe1.textContent = eventsCamping[event];
                break;
            case 5 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'block';
                imgDe6.style.display = 'none';
                event = Math.round(Math.random()*(eventsCampanets.length - 1));
                paragraphe1.textContent = eventsCampanets[event];
                break;
            case 6 :
                imgDe1.style.display = 'none';
                imgDe2.style.display = 'none';
                imgDe3.style.display = 'none';
                imgDe4.style.display = 'none';
                imgDe5.style.display = 'none';
                imgDe6.style.display = 'block';
                event = Math.round(Math.random()*(eventsSpe.length - 1));
                paragraphe1.textContent = eventsSpe[event];
                break;
            default :
                break;
        }
        tableau.hidden = false;
        boutonLancerDe.hidden = false;
    } else {
        boutonEttore.disabled = true;
        boutonRetourJoueurs.hidden = true;
        boutonRetourAnat.hidden = true;
        boutonRetourAntho.hidden = true;
        boutonRetourMathis.hidden = true;
        boutonRetourDoume.hidden = true;
        boutonRetourLoic.hidden = true;
        boutonRetourThib.hidden = true;
        boutonRetourKelvin.hidden = true;
        boutonRetourNico.hidden = true;
        boutonRetourLeo.hidden = true;
        boutonRetourLucien.hidden = true;
        boutonRetourGaby.hidden = true;
        boutonRetourEttore.hidden = false;
        titre.textContent = "Choix des personnages : joueur " + Joueur;
    }
});

/* Ajout des actions sur les boutons de retour pendant la sélection des personnages */
boutonRetourAnat.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonAnat.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourAnat.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourAntho.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonAntho.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourAntho.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourMathis.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonMathis.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourMathis.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourDoume.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonDoume.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourDoume.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourLoic.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonLoic.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourLoic.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourThib.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonThib.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourThib.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourKelvin.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonKelvin.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourKelvin.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourNico.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonNico.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourNico.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourLeo.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonLeo.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourLeo.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourLucien.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonLucien.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourLucien.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourGaby.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonGaby.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourGaby.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

boutonRetourEttore.addEventListener('click', function() {
    Joueur = Joueur - 1;
    boutonEttore.disabled = false;
    boutonsPrecedents[Joueur - 1].hidden = false;
    boutonRetourEttore.hidden = true;
    titre.textContent = "Choix des personnages : joueur " + Joueur;
});

/* Bouton utilisé pour lancer les dés */
let boutonLancerDe = document.querySelector('#boutonLancerDe');
boutonLancerDe.hidden = true;

/* Images de toutes les faces du dé */
let imgDe1 = document.querySelector('#imgDe1');
imgDe1.style.display = 'none';
let imgDe2 = document.querySelector('#imgDe2');
imgDe2.style.display = 'none';
let imgDe3 = document.querySelector('#imgDe3');
imgDe3.style.display = 'none';
let imgDe4 = document.querySelector('#imgDe4');
imgDe4.style.display = 'none';
let imgDe5 = document.querySelector('#imgDe5');
imgDe5.style.display = 'none';
let imgDe6 = document.querySelector('#imgDe6');
imgDe6.style.display = 'none';

/* Compteur pour gérer les tours */
let compteur = 0;

/* Tableau gérant les tours passés par les joueurs */
let passe_tour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

boutonLancerDe.addEventListener('click', function() {
    imgGris.style.display = 'none';
    let res = Math.round(Math.random()*5 + 1);
    let event;
    switch (res) {
        case 1 :
            imgDe1.style.display = 'block';
            imgDe2.style.display = 'none';
            imgDe3.style.display = 'none';
            imgDe4.style.display = 'none';
            imgDe5.style.display = 'none';
            imgDe6.style.display = 'none';
            event = Math.round(Math.random()*(eventsSoiree.length - 1));
            paragraphe1.textContent = eventsSoiree[event];
            break;
        case 2 :
            imgDe1.style.display = 'none';
            imgDe2.style.display = 'block';
            imgDe3.style.display = 'none';
            imgDe4.style.display = 'none';
            imgDe5.style.display = 'none';
            imgDe6.style.display = 'none';
            event = Math.round(Math.random()*(eventsAix.length - 1));
            paragraphe1.textContent = eventsAix[event];
            switch (event) {
                case 5 :
                    if (joueurs[compteur] !== "Loic") {
                        passe_tour[compteur] = 1;
                    }
                    break;
                case 12 :
                    if (joueurs[compteur] !== "Leo" && joueurs[compteur] !== "Gaby" && joueurs[compteur] !== "Ettore" && joueurs[compteur] !== "Kelvin") {
                        passe_tour[compteur] = 1;
                    }
                    break;
                    case 18 :
                    passe_tour[compteur] = 1;
                    break;
                case 22 :
                    if (joueurs[compteur] !== "Leo") {
                        passe_tour[compteur] = 1;
                    }
                    break;
                case 26 :
                    passe_tour[compteur] = 1;
                    break;
                default :
                    break;
            }
            break;
        case 3 :
            imgDe1.style.display = 'none';
            imgDe2.style.display = 'none';
            imgDe3.style.display = 'block';
            imgDe4.style.display = 'none';
            imgDe5.style.display = 'none';
            imgDe6.style.display = 'none';
            event = Math.round(Math.random()*(eventsPlage.length - 1));
            paragraphe1.textContent = eventsPlage[event];
            break;
        case 4 :
            imgDe1.style.display = 'none';
            imgDe2.style.display = 'none';
            imgDe3.style.display = 'none';
            imgDe4.style.display = 'block';
            imgDe5.style.display = 'none';
            imgDe6.style.display = 'none';
            event = Math.round(Math.random()*(eventsCamping.length - 1));
            paragraphe1.textContent = eventsCamping[event];
            break;
        case 5 :
            imgDe1.style.display = 'none';
            imgDe2.style.display = 'none';
            imgDe3.style.display = 'none';
            imgDe4.style.display = 'none';
            imgDe5.style.display = 'block';
            imgDe6.style.display = 'none';
            event = Math.round(Math.random()*(eventsCampanets.length - 1));
            paragraphe1.textContent = eventsCampanets[event];
            break;
        case 6 :
            imgDe1.style.display = 'none';
            imgDe2.style.display = 'none';
            imgDe3.style.display = 'none';
            imgDe4.style.display = 'none';
            imgDe5.style.display = 'none';
            imgDe6.style.display = 'block';
            event = Math.round(Math.random()*(eventsSpe.length - 1));
            paragraphe1.textContent = eventsSpe[event];
            break;
        default :
            break;
    }

    /* Joueur suivant */
    compteur++;

    /* Si le dernier joueur à déjà joué, c'est au tour du premier joueur de jouer */
    if (compteur === nbJoueurs) {
        compteur = 0;
    }

    /* Gestion du premier joueur à qui c'est le tour (qui ne passe pas son tour) */
    while (passe_tour[compteur] === 1) {
        passe_tour[compteur] = 0;
        compteur++;
        if (compteur === nbJoueurs) {
            compteur = 0;
        }
    }

    /* Annonce du tour du joueur */
    titre.textContent = "Jeu en cours : tour de " + joueurs[compteur];

    /* Changement du background */
    switch (joueurs[compteur]) {
        case 'Anat' :
            document.body.style.backgroundImage = "url('images/anat.jpg')";
            break;
        case 'Antho' :
            document.body.style.backgroundImage = "url('images/antho.jpg')";
            break;
        case 'Doume' :
            document.body.style.backgroundImage = "url('images/doume.jpg')";
            break;
        case 'Loic' :
            document.body.style.backgroundImage = "url('images/loic.jpg')";
            break;
        case 'Thib' :
            document.body.style.backgroundImage = "url('images/thib.jpg')";
            break;
        case 'Nico' :
            document.body.style.backgroundImage = "url('images/nico.jpg')";
            break;
        case 'Kelvin' :
            document.body.style.backgroundImage = "url('images/kelvin.jpg')";
            break;
        case 'Leo' :
            document.body.style.backgroundImage = "url('images/leo.jpg')";
            break;
        case 'Lucien' :
            document.body.style.backgroundImage = "url('images/lucien.jpg')";
            break;
        case 'Mathis' :
            document.body.style.backgroundImage = "url('images/mathis.jpg')";
            break;
        case 'Gaby' :
            document.body.style.backgroundImage = "url('images/gaby.jpg')";
            break;
        case 'Ettore' :
            document.body.style.backgroundImage = "url('images/ettore.jpg')";
            break;
    }
});

/* Evenements soirée */
let eventsSoiree = [
    "Antho et Nico te choppent avec un pastis : bois 2 gorgées, Antho et Nico aussi.",
    "Vous repérez des meufs : bois 3 gorgées pour te donner du courage.",
    "Gaby et Ettore te ramènent de soirée : la soirée est finie, finis ton verre ou fais le finir à quelqu'un (Gaby et Ettore immunisés)",
    "Leo te ramène de soirée : la soirée est finie, finis ton verre ou fais le finir à quelqu'un (Leo immunisé)",
    "Tu finis KO : bois 3 gorgées, Antho et Nico immunisés",
    "Tu fumes un dragon : bois 3 gorgées, Kelvin, Leo et Ettore immunisés",
    "Tu pars en soirée chez Nico : bois 3 gorgées.",
    "Nico aboie sur ta cible : ta streetcred diminue, Nico immunisé.",
    "Tu pecho : bois 2 gorgées, ta streecred augmente.",
    "Tu chiches : bois 2 gorgées, Anat, Leo et Kelvin immunisés.",
    "Cuite au Ricard : ceux qui boivent du Ricard boivent 4 gorgées.",
    "Cuite à la bière : ceux qui boivent de la bière boivent 4 gorgées.",
    "Cuite à la vodka : ceux qui boivent de la vodka boivent 4 gorgées.",
    "Cuite au rouge : ceux qui boivent du rouge boivent 4 gorgées.",
    "Soirée entre couilles : bois 3 gorgées.",
    "Tu te fais draguer par un gay : bois 3 gorgées, Thib, Nico et Mathis immunisés.",
    "C'est le dernier tkt : bois 4 gorgées.",
    "La goutte de trop : bois 4 gorgées.",
    "Nico te touche les fesses : bois 2 gorgées, Nico, Doume et Mathis immunisés.",
    "Coma éthylique : bois 5 gorgées.",
    "Kelvin t'apprends à rouler : bois 2 gorgées pour t'aider à te concentrer.",
    "Tu arrives défoncé au resto : Thib et Anat boivent.",
    "Tu montres tes couilles en public : Nico et Antho boivent.",
    "Ettore prends la confiance et invite des filles pour boire un verre : bois 2 gorgées pour le courage.",
    "Antho te prends 1vs1 alcool : tu peux fuir, sinon Antho peut faire boire quelqu'un (4 gorgées).",
    "Antho vole ta meuf : bois 3 gorgées pour oublier.",
    "Tu désignes un Sam : Sam ne boit pas pendant 2 tours, Ettore et Gab immunisés.",
    "Code blanc : bois 5 gorgées pour avoir oublié ton caoutchouc.",
    "Tu testes la coc : bois 4 gorgées, Ettore et Thib immunisés.",
    "Un gay propose de te sucer : tu bois 3 gorgées avec Nico, Mathis immunisé.",
    "Antho baise à côté de toi : bois 2 gorgées.",
    "Anatole t'apprends à préparer une chicha : bois 2 gorgées pour apprendre plus facilement.",
    "Lucien te fait investir dans des capotes fluorenscentes et tu deviens riche : bois 2 gorgées pour le remercier.",
    "Leo devient ultra gênant avec ta target : ta street cred baisse, Leo immunisé.",
    "Loic t'apprends à jouer de la guitare pour pecho de la meuf : ta street cred augmente.",
    "Loic te bloque l'accès à la cuisine pour débat politique avec une meuf : tu ne bois pas au prochain tour, Loic immunisé.",
    "Tu fais ta première fois : désigne une victime : Nico, Gab ou Loic qui doit boire 3 gorgées.",
    "Antho te balance à sa place : ta street cred baisse et Antho bois 3 gorgées."
]

/* Evenements Aix */
let eventsAix = [
    "Lundipéro : tout le monde boit 3 gorgées.",
    "Sacré Coeur : tous ceux qui n'étaient pas a Sacré Coeur boivent 2 gorgées.",
    "Cezanne : tous ceux qui n'étaient pas à Cezanne boivent 2 gorgées.",
    "Tu gagnes en 1vs1 contre Lucien sur Fornite : ta street cred augmente, celle de Lucien baisse.",
    "Tu as la chiasse au juste à côté : ta street cred descend, bois 2 gorgées pour remplir ce que tu viens de vider.",
    "Tu meurs d'une flèche dans le jardin de Loic : passe le prochain tour, Loic immunisé.",
    "Tu fais un 1vs1 contre un clochard : ta street cred augmente, bois 2 gorgées avec lui (tu le designes).",
    "Tu soudoies le videur : ta street cred augmente.",
    "Tu vomis sur le lieu de ton travail : bois 2 gorgées pour éviter la gueule de bois, Anat immunisé.",
    "Tu crées le son de l'été avec Doume : bois 2 gorgées avec Doume.",
    "Tu frappes des gays avec Mathis : bois 1 gorgée, Mathis ne boit pas au prochain tour.",
    "Tu frappes des étrangers avec Lucien : bois 1 gorgée avec Lucien, Lucien ne boit pas au prochain tour.",
    "Tu skies avec Gaby et Kelvin : tu rates le dernier télésiège parce qu'ils sont trop lents, passe le prochain tour, Leo, Gaby, Ettore et Kelvin immunisés.",
    "Tu te fais bouger par les chevaux de Gaby : va à l'hôpital, Gaby immunisé.",
    "Doume se fout de toi dans un de ses sons : bois 2 gorgées et mange ton seum.",
    "Tu te fais courser par les flics : bois 3 gorgées apres leur avoir échappé ou va au commissariat, Gaby et Ettore immunisés.",
    "Anat te ramene de soirée (tu fais un détour au commissariat) : retourne au commissariat.",
    "Thib vomit dans les toilettes : tu l'abandonnes ou tu bois 1 gorgée.",
    "Tu te fais recaler : passe le prochain tour.",
    "Doume réussit à chopper avec toi le num de sa voisine : bois 2 gorgées avec Doume pour fêter ça.",
    "Tu fais la tournée du capitaine : ta street cred augmente, bois 5 gorgées et ne bois pas au prochain tour.",
    "Début d'une course au feu de bellegarde : défie quelqu'un et finissez votre verre le plus vite possible.",
    "Leo te trace en ski , tu te perds : passe le prochain tour, Leo immunisé.",
    "Tu ramènes Ettore à la panda : retourne à la panda, Ettore et Gaby immunisés.",
    "Tu ramènes Anat à la panda : retourne à la panda, Anat et Lucien immunisés.",
    "Baston : Kelvin bois 1 gorgée.",
    "Kelvin te tue à l'arme blanche : passe le prochain tour",
    "Tu vas toucher : bois 2 gorgées.",
    "Dedel parle avec toi toute la soirée : bois 1 gorgée et bois 2 fois plus au prochain tour.",
    "Angello t'accostes : Anat doit fermer sa gueule pendant 2 minutes.",
    "Les petits du parc te proposent de la beuh : bois 1 gorgée à leur santé.",
    "Le père de gab mixe avec toi : ta streetcred augmente.",
    "Tu gagnes une partie de cache-cache : ta streetcred aumente, bois 2 gorgées pour fêter ça."
]

/* Evenements plage */
let eventsPlage = [
    "Tu prends des champignons : bois 3 gorgées.",
    "Tu regardes des jolies fesses avec les lunettes fesses : bois 1 gorgée en profitant du paysage.",
    "Nico te plaque sur la plage : retourne à l'hôpital, Nico immunisé.",
    "Gaby et Lucien partent en mer avec toi : la petite virée est sympathique.",
    "Gaby et Lucien partent en mer avec toi : vous coulez, retourne à l'hôpital avec eux.",
    "Tu arrives sur la plage avec Nico et Mathis : ta streetcred diminue, bois 2 gorgées.",
    "Thib et Antho lancent leur danse : tout le monde boit 3 gorgées.",
    "Tu te bats contre des mecs armés de pétards sur la plage : retourne à l'hôpital, Kelvin, Antho et Nico immunisés.",
    "Gaby rate son salto : Gaby retourne à l'hôpital."
]

/* Evenements camping */
let eventsCamping = [
    "Tu gagnes Antho à la pétanque : ta streetcred augmente, bois 2 gorgées car on ne joue jamais sans se rafraîchir.",
    "Tu rencontres une milf avec des enfants et de l'argent et des gros seins : elle t'offre à boire 3 gorgées.",
    "Tu voles un panneau : bois 3 gorgées pour t'en rappeler, Nico immunisé.",
    "Tu voles un transpalette : bois 3 gorgées pour esquiver Wakanda, Ettore immunisé.",
    "Tu te bats avec wakanda : retourne à l'hôpital.",
    "Tu finis premier du classement gay : bois 5 gorgées.",
    "Ettore te prépare des pâtes à la bière : tu bois avec un joueur qu'Ettore désigne.",
    "Tu chantes sous les douches avec tout le monde : tout le monde boit 4 gorgées.",
    "Tu rejoues les scènes du roi lion : ta streetcred augmente, Loic choisit quelqu'un qui boit.",
    "Anat et Loic t'incrustent dans un groupe sur la plage : choisis quelqu'un qui boira avec toi au prochain tour.",
    "Tu rencontres des anglaises avec Thib : ceux qui sont nuls en anglais boivent.",
    "Antho te parle pétanque : bois 2 gorgées parce que la pétanque c'est sacré, Antho immunisé.",
    "Tu réussis à congeler de l'alcool : bois 4 gorgées pour fêter ca.",
    "Petit dej au pastis avec céréales à la bière : bois 3 gorgées pour accompagner le tout, Nico immunisé.",
    "Tu te fais chopper en train de chier sur le canap du voisin : bois 2 gorgées, Doume et Kelvin immunisés."
]

/* Evenements campanets */
let eventsCampanets = [
    "Le DJ disparaît : buvez 1 gorgée en l'attendant.",
    "Tu abîmes le mobilier : bois 2 gorgées pour le réparer.",
    "Tu dors dans la cheminée : ta streetcred diminue, bois 1 gorgée.",
    "Soirée dans la chapelle : tout le monde boit 3 gorgées.",
    "Rosé offert : tout le monde boit 2 gorgées.",
    "Rassemblement DT : tout le monde boit 1 gorgée."
]

/* Evenements ? */
let eventsSpe = [
    "T'es pas le pingouin qui glisse le plus loin : Leo désigne quelqu'un qui boit.",
    "Anat récupère une chicha : la streetcred d'Anat augmente.",
    "Boire pour oublier qu'on boit : Nico boit 2 gorgées.",
    "Je m'entends super bien avec moi-même : Loic boit 2 gorgées.",
    "C'est hayyy : Gaby boit 2 gorgées.",
    "Une dans la moule une dans le boule : Kelvin boit 2 gorgées.",
    "Lucien ouvre la chemise : la streetcred de Lucien augmente.",
    "Ettore trouve une meuf avec qui danser : la streetcred d'Ettore augmente.",
    "Anat commence la danse du chômage : la streetcred d'Anat diminue.",
    "Thib vient de finir sa 10ème soirée : Thib boit 2 gorgées."
]

/* Gestion de la streetcred */

/* Tableau qui affiche la streetcred */
let tableau = document.querySelector('#tableau');
tableau.hidden = true;

/* Streecred des personnages */
let SCAnat = document.querySelector('#SCAnat');
let SCAntho = document.querySelector('#SCAntho');
let SCMathis = document.querySelector('#SCMathis');
let SCDoume = document.querySelector('#SCDoume');
let SCLoic = document.querySelector('#SCLoic');
let SCThib = document.querySelector('#SCThib');
let SCKelvin = document.querySelector('#SCKelvin');
let SCNico = document.querySelector('#SCNico');
let SCLeo = document.querySelector('#SCLeo');
let SCLucien = document.querySelector('#SCLucien');
let SCGaby = document.querySelector('#SCGaby');
let SCEttore = document.querySelector('#SCEttore');
