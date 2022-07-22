import React from "react";
import { useNavigate } from "react-router-dom";
import Pdf from "./Pdf";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

import "../styles/Ciel.scss";

export default function Ciel() {
  const navigate = useNavigate();
  return (
    <div className="ciel-container">
      <h1 className="title">Ciel du mois</h1>
      <Pdf />
      <button
        className="button-right"
        type="button"
        onClick={() => navigate("/contact")}
      >
        <img
          src={rightArrow}
          alt="navigation"
          style={{ height: 53, width: 36 }}
        />
      </button>
      <button
        className="button-left"
        type="button"
        onClick={() => navigate("/events")}
      >
        <img
          src={leftArrow}
          alt="navigation"
          style={{ height: 53, width: 36 }}
        />
      </button>
    </div>
  );
}
