import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/root.css";

import Header from "./Header";
import Menu from "./Menu";
import { Main } from "./Main";

import { IntlProvider } from "react-intl";
import React, { useContext } from 'react';
import { LangContext } from "../App";

import {  BrowserRouter as Router } from "react-router-dom";

export default function Root() {
  const { lang } = useContext(LangContext);

  return (
    <IntlProvider messages={lang.message} locale={lang.locale}>
      <div className="root-container">
        <Router>
          <Header />
          <Menu />
          <Main />
        </Router>
      </div>
    </IntlProvider>
  );
}