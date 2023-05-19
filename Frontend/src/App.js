import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Dashboard from "./screens/Dashboard/dashboard.js";
import NavBar from "./components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div style={{ minHeight: "calc(100vh - 200px)" }}>
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
