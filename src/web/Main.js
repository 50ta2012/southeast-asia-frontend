import "./css/main.css";
import Lpr from "../tab/Lpr";
import Violation from "../tab/Violation";
import Live from "../tab/Live";
import {
  Routes,
  Route
} from "react-router-dom";
import UserProfile from "../tab/UserProfile";
import Thailand from "../tab/Thailand";

export function Main() {
  return (
    <div className="main">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Violation />} />
          <Route path="/lpr" element={<Lpr />} />
          <Route path="/live" element={<Live />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/thailand" element={<Thailand />} />
        </Routes>
      </div>
    </div>
  );
}