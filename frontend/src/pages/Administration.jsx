/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import userAPI from "../services/userAPI";
import CurrentUserContext from "../contexts/userContext";
import "../styles/Administration.scss";
import "../styles/Variables.scss";

export default function Administration() {
  const navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [site, setSite] = useState("");
  const { user, setUser } = useContext(CurrentUserContext);

  const handleDisconnect = () => {
    userAPI
      .get("/api/auth/logout")
      .then(() => {
        localStorage.clear();
        setUser(undefined);
        navigate("/");
        toast.warning("Vous êtes déconnecté !");
      })
      .catch((err) => console.error(err.message));
  };

  const getEvent = () => {
    if (user) {
      userAPI.get("/api/event").then((response) => {
        setEvent(response.data[0]);
      });
    }
  };

  const createNewEvent = (e) => {
    e.preventDefault();
    if (user) {
      userAPI
        .post(`/api/event`, {
          title,
          description,
          date,
          site,
        })
        .then(() => {
          toast.success("Nouvel evenement ajouté !");
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
    } else toast.warning("Vous n'êtes pas connecté !");
  };

  const deleteEvent = (id) => {
    if (user) {
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
    } else toast.warning("Vous n'êtes pas connecté !");
  };

  const updateEvent = async (id) => {
    if (user) {
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
    } else toast.warning("Vous n'êtes pas connecté !");
  };

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <div className="administration-container">
      <h1 className="title">Administration</h1>
      <button
        className="btn-tools"
        type="button"
        onClick={() => navigate("/tools")}
      >
        Tools
      </button>
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
            <button
              className="btn-admin"
              type="button"
              onClick={() => deleteEvent(data.id)}
            >
              Supprimer l'évenement
            </button>
            <button
              className="btn-admin"
              type="button"
              onClick={() => updateEvent(data.id)}
            >
              Modifier l'évenement
            </button>
          </ul>
        ))}
        <div className="create">
          <ul>
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

            <button
              className="btn-admin"
              type="submit"
              onClick={createNewEvent}
            >
              Ajouter cet event
            </button>
          </ul>
        </div>
        <NavLink to="/Login" className="nav-link" onClick={handleDisconnect}>
          <div>
            <button type="submit">Déconnexion</button>
          </div>
        </NavLink>
        <button className="btn" type="submit" onClick={() => navigate("/")}>
          Retour
        </button>
      </div>
    </div>
  );
}
