const codeRGB = document.getElementById('codeRGB');

//document.body.style.transition = "none";
genererRGB();
document.body.offsetHeight; //pour forcer le navigateur à lancer les lignes précédentes tout de suite
document.body.style.transition = "1s linear";

window.addEventListener('click', (e) => {
    genererRGB();
})

function genererRGB() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const rgb = "rgb(" + r + ',' + g + ',' + b + ')';
    // const color = `rgb(${r}, ${g}, ${b})`;

    codeRGB.setAttribute('texteJS', rgb);
    codeRGB.classList.add("ajouterTexte");
    document.body.style.background = rgb;
}