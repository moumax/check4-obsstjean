import React from "react";

import "../styles/EventAdmin.scss";

export default function EventAdmin() {
  return (
    <div className="event-admin-container">
      <h2>Events list</h2>
      <h2>Gestion des evenements</h2>
      <form className="form-add-event">
        <input
          className="input-event"
          type="text"
          name="event"
          placeholder="Evenement"
        />
        <input
          className="input-description"
          type="text"
          name="description"
          placeholder="Description"
        />
        <input
          className="input-date"
          type="text"
          name="date"
          placeholder="Date"
        />
        <input
          className="input-lieu"
          type="text"
          name="lieu"
          placeholder="Lieu"
        />
        <button className="add-button" type="submit">
          Ajouter cet event
        </button>
      </form>
    </div>
  );
}
