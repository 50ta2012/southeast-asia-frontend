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
            <a href="/tab2">
              <div className="nav-text">{titleMap["/tab2"]}</div>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <a href="/tab3">
              <div className="nav-text">{titleMap["/tab3"]}</div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}