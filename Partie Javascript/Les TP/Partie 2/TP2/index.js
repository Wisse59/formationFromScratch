// Créer un événément au scroll

/*window.addEventListener ("scroll", (e) => {
    console.log(window.scrollY); // Connaitre niveau de scroll (window.scrollY)
})*/

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

const navbar = document.querySelector("nav");
let scroll = window.scrollY;

window.addEventListener ("scroll", (e) => {
    if (window.scrollY < scroll) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "0px";
    }

    scroll = window.scrollY; // Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
});