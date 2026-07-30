// Créer un événement au scroll

const popup = document.querySelector(".pop-up");

let isButtonPressed = 0;
// const boutonClique = document.querySelector("button-container button:active");
const bouton = document.querySelector(".fa-times-circle");

window.addEventListener ("click", (e) => {
    if (e.target === isButtonPressed) {
        isButtonPressed = 1;
        popup.style.opacity = "0";
        popup.style.transform = "translateX(400px)";
    }
});

window.addEventListener ("scroll", (e) => {
    // Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut
    if (window.scrollY > 50) {
        navbar.style.height = "45px";
    } else {
        navbar.style.height = "90px";
    }

    // Faire apparaitre l'image de la partie improvise
    if (window.scrollY >= 85) {
        imgImprovise.style.opacity = "1";
        imgImprovise.style.transform = "translateX(0px)";
    } else {
        imgImprovise.style.opacity = "0";
        imgImprovise.style.transform = "translateX(-200px)";
    }

    // Faire apparaitre la popup quand on est en bas du site
    if (((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) && (isButtonPressed == 0)) {
        popup.style.opacity = "1";
        popup.style.transform = "translateX(0px)";
    } else {
        popup.style.opacity = "0";
        popup.style.transform = "translateX(400px)";
    }
});