import EventAdmin from "../components/EventAdmin";
import "../styles/Administration.scss";
import "../styles/Variables.scss";

export default function Administration() {
  return (
    <div className="administration-container">
      <div className="container">
        <h1>Administration</h1>
      </div>
      <EventAdmin />
    </div>
  );
}
