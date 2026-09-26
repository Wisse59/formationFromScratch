import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";

const CoupCoeur = ({mesCoupsCoeurs, setMesCoupsCoeurs}) => {
    const chargerMemoire = () => {
        if (localStorage) {
            setMesCoupsCoeurs(JSON.parse(localStorage.getItem("memoireCoupCoeur")));
        };
    }
    
    useEffect(() => chargerMemoire(), []);

    function actualiserMemoire(donnee) {
        localStorage.setItem("memoireCoupCoeur", JSON.stringify(donnee));
    }

    function retirerCDC(monCDC) {
        const nouvListeCDC = [...mesCoupsCoeurs];
        nouvListeCDC.splice(monCDC, 1);
        setMesCoupsCoeurs(nouvListeCDC);
        actualiserMemoire(nouvListeCDC);
    }

    function noGenre(no) {
        if (no === 12) {
            return "Aventure";
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
        } else if (no === 53) {
            return "Thriller"
        } else if (no === 80) {
            return "Crime"
        } else if (no === 878) {
            return "Science-Fiction"
        } else if (no === 9648) {
            return "Mystère"
        } else if (no === 10749) {
            return "Romance"
        } else if (no === 10751) {
            return "Famille"
        } else {
            return "Autre"
        }
    }

    return (
        <div>
            <div className="navbarEtTitre">
                <Navigation />
                <Titre />
            </div>
            <p id="titreCDC">Coups de cœur &#128150;</p>

            <div id="filmsCDC">
                {
                    mesCoupsCoeurs.map((valeur, i) => {                        
                        return (
                            <div className="card" key={mesCoupsCoeurs[i].id}>
                                <div className="img-container">
                                    <img src={`https://image.tmdb.org/t/p/w500/${mesCoupsCoeurs[i].poster_path}`} className="imgFilm" alt={mesCoupsCoeurs[i].title}></img>
                                </div>
                                <p className="titreFilm">{mesCoupsCoeurs[i].title}</p>
                                <p className="dateFilm">Sorti le : {mesCoupsCoeurs[i].release_date}</p>
                                <p className="noteFilm">{mesCoupsCoeurs[i].vote_average.toFixed(2)}/10 <i className="fa-solid fa-star"></i></p>
                                <div className="genres">
                                    {
                                        mesCoupsCoeurs[i].genre_ids.map((genre, idGenre) => {
                                            return (
                                                <ul className="genre-container" key={parseInt(mesCoupsCoeurs[i].id.toString() + idGenre.toString())}>
                                                {/* Incrément en txt de l'id de la 1ere boucle + l'id de la 2nde, le tout passé en nombre */}
                                                    <li className="genre">{noGenre(mesCoupsCoeurs[i].genre_ids[idGenre])}</li>
                                                </ul>
                                            )
                                        })
                                    }
                                </div>
                                <p>Synopsis</p>
                                <p className="description">{mesCoupsCoeurs[i].overview}</p>
                                <div className='coupCoeur-container'>
                                    <button className='coupCoeur' onClick={() => { retirerCDC(i) } }>Supprimer de la liste</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CoupCoeur;
