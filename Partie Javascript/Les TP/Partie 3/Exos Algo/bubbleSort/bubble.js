console.log('Le tri à bulles');
liste = [451, 2, 65, 4, 7, 98, 2, 3, 1];
console.log('La liste de départ est :');
console.log(liste);

function triABulle(maListe) {
    let indiceFinal = liste.length;

    for (let i = 0; i < liste.length-1; i++) {
        for (let j = 1; j < indiceFinal; j++) {
            if (maListe[j] < maListe[j-1]) {
                // let temp = maListe[j];
                // maListe[j] = maListe[j-1];
                // maListe[j-1] = temp;
                [liste[j], liste[j-1]] = [liste[j-1], liste[j]];
            }
        }
        indiceFinal -= 1;
    }
    
    return maListe;
}

//méthode plus rapide
function bubble(liste) {
    return liste.sort((a, b) => a - b);
}

liste = bubble(liste);
//on ecrase la precedente
console.log('La liste triée est :');
console.log(liste);