const codeRBG = document.getElementById('codeRGB');

genererRGB();

window.addEventListener('click', (e) => {
    genererRGB();
})

function genererRGB() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    rgb = "rgb(" + r + ',' + g + ',' + b + ')';
    codeRBG.setAttribute('texteJS', rgb);
    codeRGB.classList.add("ajouterTexte");
    document.body.style.background = rgb;
}