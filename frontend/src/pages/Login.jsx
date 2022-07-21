import InputLogin from "../components/InputLogin";
import "../styles/Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <div className="container">
        <h1>Page login</h1>
        <InputLogin />
      </div>
    </div>
  );
}
