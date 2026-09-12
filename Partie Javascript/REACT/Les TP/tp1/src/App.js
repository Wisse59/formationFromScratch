import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [appData, setAppData] = useState([]);
  const [maRecherche, setMaRecherche] = useState("");
  const listePlats = ['Corba', 'Burek', 'Kumpir', 'Tamiya', 'Dal_fry', 'Poutine', 'Lasagne', 'Timbits', 'Wontons', 'Kafteji', 'Big_mac', 'Koshari', 'Kapsalon', 'Fish_pie', 'Pancakes', 'Kedgeree', 'Flamiche', 'Stamppot', 'Moussaka', 'Shawarma', 'Eton_mess', 'Ribollita', 'Yaki_udon', 'Tourtiere', 'Sugar_pie'];

  const getData = () => {
    for (let i = 0; i < listePlats.length; i++) {
      axios
        .get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + listePlats[i])
        .then((res) => {
          setAppData((appData) => [...appData, res.data]);
        });
    }
  }

  useEffect(() => getData(), []);

  const platsTries = [...appData].sort((a,b) => {
    return a.meals[0].strMeal.localeCompare(b.meals[0].strMeal);
  });

  function modifRecherche(event) {
    setMaRecherche(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Cook</h1>
      </header>

      <div id="recherche-container">
        <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" id="recherche" value={maRecherche} onChange={modifRecherche}></input>
      </div>

      <div className="mesPlats">
          {platsTries[0]?.meals?.[0] && ( //si ça existe
            platsTries.map((valeur, index) => {
              if (platsTries[index].meals[0].strMeal.toLowerCase().includes(maRecherche.toLowerCase())) {
                return(
                  <>
                    <div className = "plat">
                      <p className="nom">{valeur.meals[0].strMeal}</p>
                      <p className="pays">Origin : {valeur.meals[0].strArea}</p>
                      <img className="image" src={valeur.meals[0].strMealThumb} alt={platsTries[index].meals[0].strMeal}></img>
                      <p className="recette">{valeur.meals[0].strInstructions.length > 610 ? valeur.meals[0].strInstructions.slice(0,609) + ".." : valeur.meals[0].strInstructions}</p>
                    </div>
                  </>
                );
              }
            })
          )}
      </div>
    </div>
  );
}

export default App;