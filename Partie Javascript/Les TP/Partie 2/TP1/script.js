// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

const bulle1 = document.createElement("div");
bulle1.classList.add("bulle1");
document.body.appendChild(bulle1);

const bulle2 = document.createElement("div");
bulle2.classList.add("bulle2");
document.body.appendChild(bulle2);

const bulle3 = document.createElement("div");
bulle3.classList.add("bulle3");
document.body.appendChild(bulle3);

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

document.addEventListener("mousemove", (e) => {
    bulle1.style.display = "block";
    bulle1.style.transform = `translateX(${e.clientX - 7}px) translateY(${e.clientY - 7}px)`
});

document.addEventListener("mousemove", (e) => {
    bulle2.style.display = "block";
    bulle2.style.transform = `translateX(${e.clientX - 50}px) translateY(${e.clientY - 50}px)`
});

document.addEventListener("mousemove", (e) => {
    bulle3.style.display = "block";
    bulle3.style.transform = `translateX(${e.clientX - 100}px) translateY(${e.clientY - 100}px)`
});

function touches(div1, div2) {
  var rect1 = div1.getBoundingClientRect();
  var rect2 = div2.getBoundingClientRect();

  if (rect1.bottom == rect2.top) {
      return true;
  }
}

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)