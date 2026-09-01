// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// Le lien ne fonctionne plus et a été remplacé par un lien recover github

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

const container = document.body.querySelector('.countries-container')
const value = document.getElementById('inputRange');
const nb = document.getElementById('rangeValue');
const recherche = document.getElementById('inputSearch');
const button1 = document.getElementById('minToMax');
const button2 = document.getElementById('maxToMin');
const button3 = document.getElementById('alpha');
let typeTri = 0;

function afficherAPI(link, search) {
    return fetch(link)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
            if (typeTri == 1) {
                data.sort((a, b) => a.population - b.population);
            } else if (typeTri == 2) {
                data.sort((a, b) => b.population - a.population);
            } else {
                data.sort((a, b) => a.name.localeCompare(b.name));
            }
            // 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

            const carte = new Map([
                [0, {flag: data[0].flag, name: data[0].name, region: data[0].region}],
            ]);
            let texteAInserer = "";

            // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
            for (let i = 0; i < data.length; i++) {
                carte.set(i, {name: data[i].name, region: data[i].region, population: data[i].population});
            }

            // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
            //j'ai créé deux variables en remplacement

            let max = value.value;
            let nbCountries = 0;
            for (let i = 0; i < data.length; i++) {                
                if (carte.get(i).name.toLowerCase().includes(search.toLowerCase())) {
                    if (nbCountries < max) {
                        texteAInserer += `
                        <div class="pays">
                            <div class='drapeau'></div>
                            <p class='nom'>${carte.get(i).name}</p>
                            <p class='region'>${carte.get(i).region}</p>
                            <p class='population'>Population : ${carte.get(i).population}</p>
                        </div>
                        `;
                    }
                    nbCountries += 1;
                }
            }
            container.innerHTML = texteAInserer;
            //pour gagner en efficacité, on ne fait l'innerHTML qu'une fois puisque ça parcourt tout le HTML
            if (max > nbCountries) {
                nb.innerHTML = nbCountries;
            }
            value.max = nbCountries;
        });
}

// 3 - Passer les données à une variable

afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', "");

recherche.addEventListener('input', () => {
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});                                                                                            //le contenu de la barre, pas l'even.

value.addEventListener('input', () => {
    nb.innerHTML = value.value;
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});

value.addEventListener('input', () => {
    nb.innerHTML = value.value;
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});

button1.addEventListener('click', () => {
    typeTri = 1;
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});
button2.addEventListener('click', () => {
    typeTri = 2;
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});
button3.addEventListener('click', () => {
    typeTri = 0;
    afficherAPI('https://gist.githubusercontent.com/stungeye/e34eee4f6665a077d320e15e2910b97a/raw/countries.json', recherche.value);
});