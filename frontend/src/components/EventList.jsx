/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import userAPI from "../services/userAPI";

import "../styles/EventList.scss";

export default function EventList() {
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [site, setSite] = useState("");

  const getEvent = () => {
    userAPI.get("/api/event").then((response) => {
      setEvent(response.data[0]);
    });
  };

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
        getEvent();
        setTitle("");
        setDescription("");
        setDate("");
        setSite("");
      })
      .catch((err) => {
        console.error(err);
        toast.warning("Erreur lors de l'envoi du formulaire");
      });
  };

  const deleteEvent = (id) => {
    userAPI
      .delete(`/api/event/${id}`)
      .then(() => {
        setEvent(
          event.filter((data) => {
            return data.id !== id;
          })
        );
      })
      .catch((err) => console.error(err));
  };

  const updateEvent = async (id) => {
    try {
      const updatedEvent = {};
      if (title) updatedEvent.title = title;
      if (description) updatedEvent.description = description;
      if (date) updatedEvent.date = date;
      if (site) updatedEvent.site = site;

      await userAPI.put(`/api/event/${id}`, updatedEvent);
      toast.success("Votre infos ont été mises à jour");
      getEvent();
    } catch (err) {
      console.error(err);
      toast.warning("Erreur lors de la mise à jour");
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="list">
      {event.map((data) => (
        <ul key={data.id}>
          <li>
            <input
              className="input-event"
              type="text"
              placeholder="Titre"
              defaultValue={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </li>
          <li>
            <input
              className="input-event"
              type="text"
              placeholder="Titre"
              defaultValue={data.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </li>
          <li>
            <input
              className="input-event"
              type="text"
              placeholder="Titre"
              defaultValue={data.date}
              onChange={(e) => setDate(e.target.value)}
            />
          </li>
          <li>
            <input
              className="input-event"
              type="text"
              placeholder="Titre"
              defaultValue={data.site}
              onChange={(e) => setSite(e.target.value)}
            />
          </li>
          <button type="button" onClick={() => deleteEvent(data.id)}>
            Supprimer l'évenement
          </button>
          <button type="button" onClick={() => updateEvent(data.id)}>
            Modifier l'évenement
          </button>
        </ul>
      ))}
      <ul className="create">
        <li>
          <input
            className="input-event"
            type="text"
            name="event"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="input-event"
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="input-event"
            type="text"
            name="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="input-event"
            type="text"
            name="lieu"
            placeholder="Lieu"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
        </li>
        <button type="submit" onClick={createNewEvent}>
          Ajouter cet event
        </button>
      </ul>
    </div>
  );
}
