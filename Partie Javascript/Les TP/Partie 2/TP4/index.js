const menu = document.querySelectorAll(".toggle-btn span");
const idMenu = document.getElementById("btn");
const sidebar = document.getElementById("side-bar");

let isOpen = 0; //barre cachee au debut

window.addEventListener ("click", (e) => {
    // Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
    menu.forEach((element) => {
        if (e.target === element) {
            if (isOpen === 0) {
                sidebar.style.left = "0px";
                idMenu.classList.add("lignesEnCroix");
                isOpen = 1;
            } else {
                sidebar.style.left = "-230px";
                idMenu.classList.remove("lignesEnCroix");
                isOpen = 0;
            }
        }

    // Ranger la sidebar si on click sur le contenu principal
    if ((e.target !== sidebar) && (isOpen === 1)) {
        if (e.target.closest('#btn')) {
            return; // On arrête l'exécution ici, on ne fait rien
        } else if (e.target.closest('ul')) {
            return; // On arrête l'exécution ici, on ne fait rien
        } else {
            sidebar.style.left = "-230px";
            idMenu.classList.remove("lignesEnCroix");
            isOpen = 0;
        }
    }  
    });
});

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml


/*
const menu = document.getElementById("btn");
const sidebar = document.getElementById("side-bar");

let isOpen = 0; //barre cachee au debut

window.addEventListener ("click", (e) => {
    // Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus
    if (e.target.closest(menu)) {
        if (isOpen === 0) {
            sidebar.style.left = "0px";
            isOpen = 1;
        } else {
            sidebar.style.left = "-230px";
            isOpen = 0;
        }
        return;
    }

    // Ranger la sidebar si on click sur le contenu principal
    if ((e.target !== sidebar) && (isOpen === 1)) {
        sidebar.style.left = "-230px";
        isOpen = 0;
    }
});
*/