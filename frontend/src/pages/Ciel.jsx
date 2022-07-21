import React from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "./Pdf";

import "../styles/Ciel.scss";

export default function Ciel() {
  const navigate = useNavigate();
  return (
    <div className="ciel-container">
      <div className="container">
        <h1 className="title">Ciel du mois</h1>
        <Pdf />
        <button type="button" onClick={() => navigate("/contact")}>
          Go
        </button>
        <button type="button" onClick={() => navigate("/events")}>
          Back
        </button>
      </div>
    </div>
  );
}
