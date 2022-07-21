import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userAPI from "../services/userAPI";
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
  }, []);

  return (
    <div className="events-container">
      <div className="container">
        <h1 className="title">Events</h1>
        <div className="timeline">
          {event.map((data) => (
            <ul>
              <li className="date" data-date={data.date}>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.site}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <button type="button" onClick={() => navigate("/ciel")}>
        Go
      </button>
      <button type="button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}
