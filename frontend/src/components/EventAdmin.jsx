import { useState } from "react";
import { toast } from "react-toastify";
import userAPI from "../services/userAPI";

import "../styles/EventAdmin.scss";

export default function EventAdmin() {
  // State event
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [site, setSite] = useState("");

  const createNewEvent = (e) => {
    e.preventDefault();
    userAPI
      .post(`/api/event`, {
        title,
        description,
        date,
        site,
      })
      .then(() => {
        toast.success("Good");
      })
      .catch((err) => {
        console.error(err);
        toast.warning("Erreur lors de l'envoi du formulaire");
      });
  };

  return (
    <div className="event-admin-container">
      <h2>Gestion des evenements</h2>
      <form className="form-add-event">
        <input
          className="input-event"
          type="text"
          name="event"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-description"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input-date"
          type="text"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="input-lieu"
          type="text"
          name="lieu"
          placeholder="Lieu"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
        <button className="add-button" type="submit" onClick={createNewEvent}>
          Ajouter cet event
        </button>
      </form>
    </div>
  );
}
