import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Menu from "./components/Menu";

import "./App.scss";
import "./styles/reset.scss";

import Events from "./pages/Events";
import Login from "./pages/Login";
import Administration from "./pages/Administration";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="app">
        <div className="full-container">
          <div className="app-container">
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/login" element={<Login />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
