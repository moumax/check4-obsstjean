import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

import "./App.scss";
import "./styles/reset.scss";

import Events from "./pages/Events";

function App() {
  return (
    <div className="app">
      <div className="full-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
