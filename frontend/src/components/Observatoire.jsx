import React from "react";

import "../styles/Observatoire.scss";

export default function Observatoire() {
  return (
    <section className="observatoire" id="observatoire">
      <div className="container">
        <div>
          <img src="src/assets/photo001.jpg" alt="coupole-observatoire" />
        </div>
        <div>
          <div className="observatoireTitre">
            <h1>Obsstjean</h1>
            <h6>L'Observatoire</h6>
          </div>
          <p>
            Depuis 1985, l'Association accueille le public dans le but de
            promouvoir l'astronomie amateur.
            <br />
            Situés en plein coeur de la ville de Saint Jean Le Blanc, nous vous
            proposons de découvrir le ciel au travers de nos différentes
            activités...
          </p>
        </div>
      </div>
    </section>
  );
}
