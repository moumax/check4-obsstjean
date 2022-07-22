/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";

import "../styles/Contact.scss";

export default function Contact() {
  const navigate = useNavigate();

  const iframeSource =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.3382561858643!2d1.9162228158956627!3d47.891137979204615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4e4c72c2c4535%3A0xd36ffd4c8387c7bf!2sObservatoire+Astronomique+Municipal+de+St+Jean-le-Blanc!5e0!3m2!1sfr!2sfr!4v1556641546156!5m2!1sfr!2sfr"></iframe>';
  return (
    <div className="contact-container">
      <h1 className="title">Contact</h1>
      <h6 className="contact-text">Pour nous rejoindre ou nous contacter</h6>
      <div
        className="carte"
        dangerouslySetInnerHTML={{ __html: iframeSource }}
      />
      <h3 className="contact-horaire">Horaires d'ouverture :</h3>
      <p className="contact-horaire">Tous les Vendredis à partir de 21h</p>

      <button
        className="button-right"
        type="button"
        onClick={() => navigate("/")}
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
        onClick={() => navigate("/ciel")}
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
