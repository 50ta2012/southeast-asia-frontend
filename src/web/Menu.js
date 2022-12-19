import "./css/menu.css";
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">

      <ul className="nav nav-justified">
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/"}>
              <div className="nav-text">
                <FormattedMessage id="menu-violation" />
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/lpr"}>
              <div className="nav-text">
                <FormattedMessage id="menu-lpr" />
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/live"}>
              <div className="nav-text">
                <FormattedMessage id="menu-live" />  
              </div>
            </Link>
          </div>
        </li>


        
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/thai_plate"}>
              <div className="nav-text">
                <FormattedMessage id="thai_plate" />
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/parking_record"}>
              <div className="nav-text">
                <FormattedMessage id="parking_record" />
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/green_red_light"}>
              <div className="nav-text">
                <FormattedMessage id="green_red_light" />
              </div>
            </Link>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link">
            <Link to={"/access_control"}>
              <div className="nav-text">
                <FormattedMessage id="access_control" />
              </div>
            </Link>
          </div>
        </li>
      </ul>

    </div>
  )
}