import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AboutTTG from "./components/shared/AboutTTG";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sobre-ttg" element={<AboutTTG />} />
      </Routes>
    </Router>
  );
}

export default App;
