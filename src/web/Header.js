import "./css/header.css"
import personSvg from "./image/person.svg"

export default function Header() {
  return (
    <div className="header">
      <div></div> {/* empty grid */}
      <div className="header-title">東南亞車牌辨識系統</div>
      <div className="header-feature">
        <div className="header-dropdown">
          <img src={personSvg} alt="" onClick={() => personDropdown()} />
          <div className="dropdown-content">
            <a href="/profile">個人資料</a>
            <hr />
            <a href="/logout">登出</a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* 下拉式選單機制 */
// 頭像按鈕
function personDropdown(){
  const dropContentEle = document.querySelector(".root-container .header-dropdown .dropdown-content");
  const style = window.getComputedStyle(dropContentEle);

  style.getPropertyValue("display") === "none" ? dropContentEle.style.display = "block" : dropContentEle.style.display = "none";
}
// 監看點擊 (除了頭像按鈕之外的區域) 隱藏下拉選單
document.addEventListener('click', (event) => {
  const personImgEle = document.querySelector(".root-container .header-dropdown img");
  const dropContentEle = document.querySelector(".root-container .header-dropdown .dropdown-content");
  const style = window.getComputedStyle(dropContentEle);

  if (style.getPropertyValue("display") === "block" && !personImgEle.contains(event.target) && !dropContentEle.contains(event.target)) {
    dropContentEle.style.display = "none";
  }
});