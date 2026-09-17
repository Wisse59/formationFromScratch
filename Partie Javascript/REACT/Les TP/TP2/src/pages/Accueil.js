import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";

const Accueil = () => {
    const [appData, setAppData] = useState([]);
    const [maRecherche, setMaRecherche] = useState("");

    const getData = () => {
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=code&language=fr-FR')
            .then((res) => {
                setAppData((appData) => res.data.results);
            });
    }

    useEffect(() => getData(), []);

    return (
        <div>
            <div className="navbarEtTitre">
                <Navigation />
                <Titre />
            </div>
            <form id="formulaire">
                <input type='text' placeholder="Entrez le titre d'un film" value={maRecherche} onChange={(e) => setMaRecherche(e.target.value)}></input>
                <button type='submit'>Rechercher</button>
            </form>
            <div id='topFlop'>
                <button id='top'>Top</button>
                <button id='flop'>Flop</button>
            </div>
            <div id="films">
                {
                    appData.map((valeur, i) => {
                        if (appData[i].title.toLowerCase().includes(maRecherche.toLowerCase())) {
                            return (
                                <div className="card" key={appData[i].id}>
                                    <p className="titreFilm">{appData[i].title}</p>
                                    <p className="dateFilm">{appData[i].release_date}</p>
                                    <p className="description">{appData[i].overview}</p>
                                    <p className="noteFilm">{appData[i].vote_average}</p>
                                    {
                                        appData[i].genre_ids.map((genre, idGenre) => {
                                            return (
                                                <ul className="genre-container" key={parseInt(appData[i].id.toString() + idGenre.toString())}>
                                                {/* Incrément en txt de l'id de la 1ere boucle + l'id de la 2nde, le tout passé en nombre */}
                                                    <li className="genre">{appData[i].genre_ids[idGenre]}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Accueil;