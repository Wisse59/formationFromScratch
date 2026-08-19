console.log('Le tri à sélection');
liste = [451, 2, 65, 4, 7, 98, 2, 3, 1];
console.log('La liste de départ est :');
console.log(liste);

function triSelection(liste) {
    //on veut le 'chot à chaque fois
    let jMin = 0;
    for (let i = 0; i < liste.length-1; i++) {
        for (let j = i; j < liste.length; j++) {
            if (liste [j] < liste[jMin]) {
                jMin = j;
            }
        }
        /*let temp = liste[i];
        liste[i] = liste[jMin];
        liste[jMin] = temp;*/
        [liste[i], liste[jMin]] = [liste[jMin], liste[i]];
        jMin = i+1;
    }

    return liste;
}

liste = triSelection(liste);
console.log('La liste triée est :');
console.log(liste);