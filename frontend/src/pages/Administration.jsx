import EventList from "../components/EventList";
import "../styles/Administration.scss";
import "../styles/Variables.scss";

export default function Administration() {
  return (
    <div className="administration-container">
      <h1>Administration</h1>
      <div className="event-list">
        <EventList />
      </div>
    </div>
  );
}
