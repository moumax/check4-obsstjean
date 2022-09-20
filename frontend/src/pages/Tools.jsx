import { useNavigate } from "react-router-dom";

export default function Ciel() {
  const navigate = useNavigate();
  return (
    <div className="tools-container">
      <p>Ceci est la page tools</p>
      <button
        className="btn-admin"
        type="button"
        onClick={() => navigate("/administration")}
      >
        Retour
      </button>
    </div>
  );
}
