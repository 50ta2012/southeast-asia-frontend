import "./css/main.css";
import titleMap from "./title.json";

const pathName = window.location.pathname;
const titleText = titleMap[pathName];

export default function Main(){

  return(
    <div className="main">
      <div className="main-title">
        {titleText}
      </div>
      <div className="main-content">

      </div>
    </div>
  )
}