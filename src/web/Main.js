import "./css/main.css";
import titleMap from "./title.json";
import Tab1 from "../tab/Tab1";
import Tab2 from "../tab/Tab2";
import Tab3 from "../tab/Tab3";
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
            <Route path="/" element={<Tab1 />} />
            <Route path="/tab2" element={<Tab2 />} />
            <Route path="/tab3" element={<Tab3 />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}