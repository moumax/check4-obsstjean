import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CurrentUserContext from "../contexts/userContext";

import userAPI from "../services/userAPI";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.scss";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mail && password) {
      userAPI
        .post("/api/auth/login", { mail, password })
        .then((res) => {
          toast.success("Vous êtes connecté !");
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data));
          navigate("/administration");
        })
        .catch(() =>
          toast.warning("Votre email ou votre mot de passe est faux")
        );
    }
  };
  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user"
            name="user"
            placeholder="Votre email"
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="Votre mot de passe"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" type="submit">
            Se connecter
          </button>
          <button className="btn" type="submit" onClick={() => navigate("/")}>
            Retour
          </button>
        </form>
      </div>
    </div>
  );
}
