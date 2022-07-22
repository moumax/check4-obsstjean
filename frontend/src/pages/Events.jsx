import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../services/userAPI";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import "../styles/Events.scss";

export default function Events() {
  const navigate = useNavigate();
  const [event, setEvent] = useState([]);
  const getEvent = () => {
    userAPI.get("/api/event").then((response) => {
      setEvent(response.data[0]);
    });
  };

  useEffect(() => {
    getEvent();
  }, [event]);

  return (
    <div className="events-container">
      <h1 className="title">Events</h1>
      <div className="timeline">
        {event.map((data) => (
          <ul>
            <li className="date">
              <p className="event-date">{data.date}</p>
              <h2 className="event-title">{data.title}</h2>
              <p className="event-description">{data.description}</p>
              <p className="event-site">{data.site}</p>
            </li>
          </ul>
        ))}
      </div>

      <button
        className="button-right"
        type="button"
        onClick={() => navigate("/ciel")}
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
        onClick={() => navigate("/")}
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
