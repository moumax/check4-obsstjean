import Observatoire from "../components/Observatoire";
import Title from "../components/Title";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <Title />
        <Observatoire />
      </div>
    </div>
  );
}
