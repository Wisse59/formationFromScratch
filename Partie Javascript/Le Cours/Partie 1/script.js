// alert("Salut JS");

/* Commenter
plusieurs
lignes */

// Kamel Case
let maSuperVariable = "Hello";

// ** Les variables **

// var = vieuc JS
var unTexte = "voici un texte";

// const = constante
const prenom = "justine";

// Let = la variable peut évoluer
let unChiffre = 24;
unChiffre = 22;

let chaine = 'Je suis l\'une des chaines de caractères';

let nouvelleChaine = "Chaine précédente : " + chaine + ". Voila le contenu";

let autreConcatenation = `Chaine précédente : ${chaine}. Voila le contenu`;


// ** Types de données **

// Ps : on a choisi les noms de var
let string = "Je suis une chaine de caractère";
let number = 24;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true]

// Objet : accolades {}
let object = {
    prenom: "audrey",
    age: 33,
    ville: "bordeaux"
}

let arbre;

arbre = "sapin";

// ** Les opérateurs **

// console.log(4 + 5);
// shit + alt + bas pour répéter la ligne
// console.log(4 - 5);
// console.log(4 / 5);
// console.log(4 * 5);
// puissance
// console.log(4 ** 5);

// ** Opérateurs d'affectations **
let total = 0;

total = total + 1; //pas une bonne pratique
total++;

total += 5;
total -= 4;
total *= 2;

//console.log(total);

// ** Structures de controle **
let x = 2;
let y = "2";

if (x > y) {
//     alert ("YES x plus gros que y");
} else if (x < y) {
//     alert("Y plus grand !");
} else {
//     alert("ILS SONT ÉGAUX");
}

// On teste si la variable est "true"

if (x) {
    // console.log("x existe !");
}

// === reste l'égalité en type et valeur
if (x === y) {
    // console.log("ils sont égaux");
} else {
    // console.log("pas égaux !");
}
    
// test l'égalité de valeur sans prendre en compte le type

if (x == y) {
    // console.log("ils sont égaux");
} else {
    // console.log("pas égaux !");
}

// || ou
// && et


// || soit l'un soit l'autre
if (x < y || x > 1) {
    // console.log("UI");
}

// && il fait que toutes les conditions soient réunies
if (x < y && x > 1) {
    // console.log("UI");
}

// ** Les fonctions **

// fonction classique (à l'ancienne)
function faireQuelqueChose() {
    console.log("je fais un truc");
    console.log(5+6);
    //return; si je mets ça ici, la fonction s'arrete ici
    alert("Calcul terminé !")    
}

// Il faut impérativement appeler la fonction pour qu'elle se joue
// appel de la fonction : faireQuelqueChose();

// fonction flèche
const addition = (a, b) => {
    // console.log(a+b);
}

addition(4,3);
addition(432, 578481);

// ** La portée des variables **

function add2() {
    let num = 4;
    console.log(num + 2);
    //return a + 2; existe aussi
}

// console.log(num);