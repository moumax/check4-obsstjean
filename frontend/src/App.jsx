import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

import "./App.scss";
import "./styles/reset.scss";

import Events from "./pages/Events";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Ciel from "./pages/Ciel";
import Administration from "./pages/Administration";

import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="app">
        <div className="full-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ciel" element={<Ciel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/administration" element={<Administration />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
