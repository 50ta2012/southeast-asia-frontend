import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/root.css";

import Header from "./Header";
import Menu from "./Menu";
import { Main } from "./Main";

import { IntlProvider } from "react-intl";
import React, { useContext } from 'react';
import { LangContext } from "../App";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../tab/Login";
import Regis from "../tab/Regis";

export default function Root() {
  const { lang } = useContext(LangContext);

  return (
    <IntlProvider messages={lang.message} locale={lang.locale}>
      <div className="root-container">
        <Router>
          <Routes>
            <Route path="*" element={
              <>
                <Header />
                <Menu />
                <Main />
              </>
            } />
            {/* {["/", "/profile", "/logout", "/lpr", "/live"].map((path, index) => {
              return (
                <Route path={path} element={
                  <>
                    <Header />
                    <Menu />
                    <Main />
                  </>
                }
                  key={index}
                />
              );
            })} */}

            <Route path="/login" element={<Login />} />
            <Route path="/regis" element={<Regis />} />
          </Routes>
        </Router>
      </div>
    </IntlProvider>
  );
}