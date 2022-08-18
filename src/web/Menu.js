import "./css/menu.css";
import titleMap from "./title.json";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="nav nav-justified">
        <li className="nav-item">
          <div className="nav-link">
            <a href="/">
              <div className="nav-text">{titleMap["/"]}</div>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <a href="/lpr">
              <div className="nav-text">{titleMap["/lpr"]}</div>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <a href="/live">
              <div className="nav-text">{titleMap["/live"]}</div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}