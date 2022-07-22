import React from "react";

import "../styles/Observatoire.scss";

export default function Observatoire() {
  return (
    <section className="observatoire" id="observatoire">
      <div className="container">
        <img src="src/assets/photo001.jpg" alt="coupole-observatoire" />
        <div className="observatoireTitre">
          <h1>Obsstjean</h1>
          <h6>LObservatoire</h6>
        </div>
        <div className="para">
          <p>
            Depuis 1985, lAssociation accueille le public dans le but de
            promouvoir lastronomie amateur.
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
