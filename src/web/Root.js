import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Helmet } from "react-helmet";
import "./css/root.css";

import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";

export default function Root() {
  return (
    <>
      {/* <Helmet>
        <title>My Title</title>
      </Helmet> */}

      <div className="root-container">
        <Header/>
        <Menu />
        <Main />
      </div>
    </>
  );
}