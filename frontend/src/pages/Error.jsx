/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Error.scss";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <img src="src/assets/pika.png" alt="Pikachu pas content"></img>
      <p className="err-text">
        Ceci est une page d'erreur incroyablement bien stylisée !!!!!!
      </p>
      <button className="btn" type="submit" onClick={() => navigate("/")}>
        RETOUR
      </button>
    </div>
  );
}
