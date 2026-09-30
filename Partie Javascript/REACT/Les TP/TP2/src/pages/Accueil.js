import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";

const Accueil = ({mesCoupsCoeurs, setMesCoupsCoeurs}) => {
    const [appData, setAppData] = useState([]);
    const [maRecherche, setMaRecherche] = useState("");

    const getData = () => {
        let recherche;
        maRecherche === "" ? recherche = "code" : recherche = maRecherche;
        //recherche par défaut
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${recherche}&language=fr-FR`)
            .then((res) => {
                setAppData(res.data.results);
            });
    }

    const chargerMemoire = () => {
        if (localStorage) {
            const memoireCDC = localStorage.getItem("memoireCoupCoeur");
            setMesCoupsCoeurs(memoireCDC ? JSON.parse(memoireCDC) : []);
        };
    }

    const majAPI = (e) => {
        e.preventDefault();
        getData();
    }
    
    // eslint-disable-next-line
    useEffect(() => getData(), []);
    // eslint-disable-next-line
    useEffect(() => chargerMemoire(), []);
    
    function actualiserMemoire(donnee) {
        localStorage.setItem("memoireCoupCoeur", JSON.stringify(donnee));
    }

    function noGenre(no) {
        if (no === 12) {
            return "Aventure";
        } else if (no === 14) {
            return "Fantaisie"
        } else if (no === 16) {
            return "Animation"
        } else if (no === 18) {
            return "Drama"
        } else if (no === 27) {
            return "Horreur"
        } else if (no === 28) {
            return "Action"
        } else if (no === 35) {
            return "Comédie"
        } else if (no === 36) {
            return "Histoire"
        } else if (no === 37) {
            return "Western"
        } else if (no === 53) {
            return "Thriller"
        } else if (no === 80) {
            return "Crime"
        } else if (no === 99) {
            return "Documentaire"
        } else if (no === 878) {
            return "Science-Fiction"
        } else if (no === 9648) {
            return "Mystère"
        } else if (no === 10402) {
            return "Musique"
        } else if (no === 10749) {
            return "Romance"
        } else if (no === 10751) {
            return "Famille"
        } else if (no === 10752) {
            return "Guerre"
        } else if (no === 10770) {
            return "Téléfilm"
        } else {
            return "Autre"
        }
    }
    
    const triFlop = () => {
        const tabFlop = [...appData].sort((a,b) => a.vote_average - b.vote_average);
                        //[...] avant appData crée une copie, qu'on peut travailler
        setAppData(tabFlop);
    }
    const triTop = () => {
        const tabTop = [...appData].sort((a,b) => b.vote_average - a.vote_average);
        setAppData(tabTop);
    }
    function ajouterCDC(nouvCDC) {
        if (mesCoupsCoeurs.includes(nouvCDC) === false) {
            const nouvListeCDC = ([...mesCoupsCoeurs, nouvCDC]);
            setMesCoupsCoeurs(nouvListeCDC);
            actualiserMemoire(nouvListeCDC);
        } //pas de doublon
    }
    return (
        <div>
            <div className="navbarEtTitre">
                <Navigation />
                <Titre />
            </div>
            <form id="formulaire" onSubmit={majAPI}>
                <input type='text' placeholder="Entrez le titre d'un film" value={maRecherche} onChange={(e) => setMaRecherche(e.target.value)}></input>
                <button type='submit'>Rechercher</button>
            </form>
            <div id='topFlop'>
                <button id='top' onClick={ triTop }>Top <i className="fa-solid fa-arrow-up"></i></button>
                <button id='flop' onClick={ triFlop }><i className="fa-solid fa-arrow-down"></i> Flop</button>
            </div>
            <div id="films">
                {
                    appData.map((valeur, i) => {
                        return (
                            <div className="card" key={appData[i].id}>
                                <div className="img-container">
                                    <img src={`https://image.tmdb.org/t/p/w500/${appData[i].poster_path}`} className="imgFilm" alt={appData[i].title}></img>
                                </div>
                                <p className="titreFilm">{appData[i].title}</p>
                                <p className="dateFilm">Sorti le : {appData[i].release_date}</p>
                                <p className="noteFilm">{appData[i].vote_average.toFixed(2)}/10 <i className="fa-solid fa-star"></i></p>
                                <div className="genres">
                                    {
                                        appData[i].genre_ids.map((genre, idGenre) => {
                                            return (
                                                <ul className="genre-container" key={parseInt(appData[i].id.toString() + idGenre.toString())}>
                                                {/* Incrément en txt de l'id de la 1ere boucle + l'id de la 2nde, le tout passé en nombre */}
                                                    <li className="genre">{noGenre(appData[i].genre_ids[idGenre])}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                                {appData[i].overview && <p>Synopsis</p> /*On ne retourne synopsis que s'il y en a un*/}
                                <p className="description">{appData[i].overview}</p>
                                <div className='coupCoeur-container'>
                                    <button className='coupCoeur' onClick={() => { ajouterCDC(appData[i]) } }>Ajouter aux coups de cœur</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Accueil;