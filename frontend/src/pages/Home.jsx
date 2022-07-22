import { useNavigate } from "react-router-dom";
import Observatoire from "../components/Observatoire";
import Title from "../components/Title";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import "../styles/Home.scss";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="title-home">
        <Title />
      </div>
      <Observatoire />

      <button
        className="button-right"
        type="button"
        onClick={() => navigate("/events")}
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
        onClick={() => navigate("/contact")}
      >
        <img
          src={leftArrow}
          alt="navigation"
          style={{ height: 53, width: 36 }}
        />
      </button>
      <button
        className="button-login"
        type="button"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
}
