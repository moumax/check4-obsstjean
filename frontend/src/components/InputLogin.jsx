import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import CurrentUserContext from "../contexts/userContext";

import userAPI from "../services/userAPI";
import "react-toastify/dist/ReactToastify.css";

export default function InputLogin() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const styleInputLogin = {
    marginTop: "200px",
  };

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
    <div style={styleInputLogin}>
      {" "}
      <form className="form-login" onSubmit={handleSubmit}>
        <input
          className="input-login"
          type="text"
          id="user"
          name="user"
          placeholder="Votre email"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          className="input-login"
          type="password"
          id="pass"
          name="pass"
          placeholder="Votre mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Se connecter
        </button>
      </form>
    </div>
  );
}
