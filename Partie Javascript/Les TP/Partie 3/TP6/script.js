const todolistContainer = document.getElementById("todolist-container");
const ajouterTexte = document.getElementById('envoi');
let textes = document.querySelectorAll(".texte");
let isChecked = "*"
//ce n'est pas un constante car on ajoutera des todo

window.addEventListener('submit', (e) => {
    e.preventDefault(); //on ne raffraichit pas la page
    const texte = document.createElement("p");
    let todo = document.createTextNode(ajouterTexte.value); //contenu de l'input texte
    texte.appendChild(todo);
    texte.classList.add("texte");
    todolistContainer.appendChild(texte);
    
    ajouterTexte.value = ""; //on efface la zone de texte
});

window.addEventListener('click', (e) => {
    let textes = document.querySelectorAll(".texte");
    textes.forEach((unTexte) => {
        if (e.target === unTexte) {
            if (unTexte.classList.contains("texteVisible")) {
                todolistContainer.removeChild(unTexte); //on sup la 2e fois
            } else {
                unTexte.classList.add("texteVisible");
            }
        };
        
    });
});

/*window.addEventListener('mouseover', (e) => {
    let textes = document.querySelectorAll(".texte");
    textes.forEach((unTexte) => {
        if (e.target === unTexte) {
            unTexte.setAttribute('mot', 'un mot');
            unTexte.classList.add("texteVisible");
        }
    });
});

window.addEventListener('mouseout', (e) => {
    let textes = document.querySelectorAll(".texte");
    textes.forEach((unTexte) => {
        unTexte.classList.remove("texteVisible");
        unTexte.classList.add("texteNonVisible");
    });
});*/

// texte.setAttribute('todo', todo); 