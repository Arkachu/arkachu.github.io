let boutonJouer = document.querySelector('#boutonJouer');
let boutonRetour = document.querySelector('#boutonRetour');
boutonRetour.hidden = true;

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

let titre = document.querySelector('h1');

let paragraphe1 = document.querySelector('#paragraphe1');
let paragraphe2 = document.querySelector('#paragraphe2');
let paragraphe3 = document.querySelector('#paragraphe3');

let liste = document.querySelector('ul');

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
