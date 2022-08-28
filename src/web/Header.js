import "./css/header.css";
import personSvg from "./image/person.svg";
import globeSvg from "./image/globe.svg";
import { FormattedMessage } from 'react-intl';
import { useContext } from "react";
import { LangContext } from "../App";
import messageInZh from "../language/zh.json";
import messageInEn from "../language/en.json";
import { Link } from "react-router-dom";

export default function Header() {
  const { setLang } = useContext(LangContext);

  return (
    <div className="header">
      <div></div> {/* empty grid */}
      <div className="header-title">
        <FormattedMessage id="header-title" />
      </div>
      <div className="header-feature">
        <div className="header-dropdown">

          <div className="icon-container">
            <div className="globe">
              <img src={globeSvg} alt="" onClick={() => iconDropdown(".globe")}></img>
              <div className="dropdown-content">
                <div onClick={() => {
                  setLang({
                    message: messageInEn,
                    locale: "en"
                  });
                }}>English</div>
                <div onClick={() => {
                  setLang({
                    message: messageInZh,
                    locale: "zh"
                  });
                }}>中文 (繁)</div>
              </div>
            </div>

            <div className="person">
              <img src={personSvg} alt="" onClick={() => iconDropdown(".person")} />
              <div className="dropdown-content">
                <Link to={"/profile"}>
                  <FormattedMessage id="header-profile" />
                </Link>
                <hr />
                <Link to={"/logout"}>
                  <FormattedMessage id="header-logout" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 下拉式選單機制 */
// 頭像按鈕
function iconDropdown(target) {
  const dropContentEle = document.querySelector(`.root-container .header-dropdown ${target} .dropdown-content`);
  const style = window.getComputedStyle(dropContentEle);

  style.getPropertyValue("display") === "none" ? dropContentEle.style.display = "block" : dropContentEle.style.display = "none";
}
// 監看點擊 (除了頭像按鈕之外的區域) 隱藏下拉選單
document.addEventListener('click', (event) => {
  dropContentEvent(".person", event);
  dropContentEvent(".globe", event);
});

function dropContentEvent(target, event) {
  const imgEle = document.querySelector(`.root-container .header-dropdown ${target} img`);
  const dropContentEle = document.querySelector(`.root-container .header-dropdown ${target} .dropdown-content`);

  const style = window.getComputedStyle(dropContentEle);

  if (style.getPropertyValue("display") === "block" && !imgEle.contains(event.target) && !dropContentEle.contains(event.target)) {
    dropContentEle.style.display = "none";
  }
}