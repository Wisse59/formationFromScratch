import React from "react";
import Navigation from "../components/Navigation";
import Titre from "../components/Titre";

const CoupCoeur = () => {
    return (
        <div>
            <div className="navbarEtTitre">
                <Navigation />
                <Titre />
            </div>
            <p>Je suis la partie Coup de Coeur !</p>
        </div>
    );
};

export default CoupCoeur;
