import "./css/main.css";
import Lpr from "../tab/Lpr";
import Violation from "../tab/Violation";
import Live from "../tab/Live";

import ThaiPlate from "../tab/ThaiPlate";
import ParkingRecord from "../tab/ParkingRecord";
import GreenRedLight from "../tab/GreenRedLight";
import AccessControl from "../tab/AccessControl";

import {
  Routes,
  Route
} from "react-router-dom";
import UserProfile from "../tab/UserProfile";

export function Main() {
  return (
    <div className="main">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Violation />} />
          <Route path="/lpr" element={<Lpr />} />
          <Route path="/live" element={<Live />} />

          <Route path="/thai_plate" element={<ThaiPlate />} />
          <Route path="/parking_record" element={<ParkingRecord />} />
          <Route path="/green_red_light" element={<GreenRedLight />} />
          <Route path="/access_control" element={<AccessControl />} />

          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}