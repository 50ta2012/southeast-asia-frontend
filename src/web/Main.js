import "./css/main.css";
import titleMap from "./title.json";
import Lpr from "../tab/Lpr";
import Violation from "../tab/Violation";
import Live from "../tab/Live";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserProfile from "../tab/UserProfile";

export function Main() {

  const pathName = window.location.pathname;
  const titleText = titleMap[pathName];

  return (
    <div className="main">
      <div className="main-title">
        {titleText}
      </div>
      <div className="main-content">
        <Router>
          <Routes>
            <Route path="/" element={<Violation />} />
            <Route path="/lpr" element={<Lpr />} />
            <Route path="/live" element={<Live />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}