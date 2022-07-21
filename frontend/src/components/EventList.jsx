import { useState, useEffect } from "react";
import userAPI from "../services/userAPI";

export default function EventList() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    userAPI.get("/api/event").then((response) => {
      setEvent(response.data[0]);
    });
  }, []);

  return (
    <div>
      <h1>Liste des évènements</h1>
      <div>
        <h2>A venir</h2>
        <div>
          {event.map((data) => (
            <div key={data.id}>
              <div>
                <h3>{data.title}</h3>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
              <div>
                <p>{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
