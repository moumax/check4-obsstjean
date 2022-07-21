import { useNavigate } from "react-router-dom";
import Observatoire from "../components/Observatoire";
import Title from "../components/Title";
import "../styles/Home.scss";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="container">
        <Title />
        <Observatoire />
        <button type="button" onClick={() => navigate("/events")}>
          Go
        </button>
        <button type="button" onClick={() => navigate("/contact")}>
          Back
        </button>
      </div>
    </div>
  );
}
