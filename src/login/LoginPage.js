
import "./css/login.css";
import globeSvg from "../web/image/globe.svg";
import { FormattedMessage, useIntl } from 'react-intl';
import { useContext, useRef } from "react";
import { LangContext } from "../App";
import messageInZh from "../language/zh.json";
import messageInEn from "../language/en.json";
import messageInTh from "../language/th.json";
import messageInVi from "../language/vi.json";
import { Link } from "react-router-dom";

export default function LoginPage() {

  const { lang, setLang } = useContext(LangContext);

  const handleLangSelect = (value) => {
    switch (value) {
      case "en":
        setLang({
          message: messageInEn,
          locale: "en"
        });
        break;
      case "zh":
        setLang({
          message: messageInZh,
          locale: "zh"
        });
        break;
      case "th":
        setLang({
          message: messageInTh,
          locale: "th"
        });
        break;
      case "vi":
        setLang({
          message: messageInVi,
          locale: "vi"
        });
        break;
      default:
        break;
    }
  }

  const username = useRef();
  const password = useRef();

  const loginSubmit = async () => {
    const csrfToken = document.cookie.replace(/(?:(?:^|.*;\s*)XSRF-TOKEN\s*\=\s*([^;]*).*$)|^.*$/, '$1');

    const formData = new FormData();
    formData.append("username", username.current.value);
    formData.append("password", password.current.value);
    try{
      const res = await fetch("/login", {
        method: "POST",
        body: formData,
        headers: { 'X-XSRF-TOKEN': csrfToken }
      });

      if( res.status === 200 ){
        window.location.href = "https://twowayiot.com";
      }
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h1>
            <FormattedMessage id="header-title" />
          </h1>
        </div>
        <div className="login-body">
          {/* <form action="/login" method="post"> */}
            <div className="form-group mb-3">
              <label>
                <FormattedMessage id="login-label-account" />
              </label>
              <input ref={username} type="text" className="form-control" id="username" name="username" placeholder={
                useIntl().formatMessage({ id: "login-holder-account" })
              } />
            </div>
            <div className="form-group mb-3">
              <label>
                <FormattedMessage id="login-label-password" />
              </label>
              <input ref={password} type="password" className="form-control" id="password" name="password" placeholder={
                useIntl().formatMessage({ id: "login-holder-password" })
              } />
            </div>
            <div className="form-button d-grid mb-3">
              <button className="btn btn-dark" onClick={() => {loginSubmit()}}>
                <FormattedMessage id="login-button" />
              </button>
            </div>
            <div className="link-container">
              <div></div>
              <div>
                <img src="/svg/person-fill.svg" alt="" height="18" width="18" />
                <Link to={"/regis"}>
                  <FormattedMessage id="login-signup" />
                </Link>
              </div>
              <div>
                <img src={globeSvg} alt="" height="18" width="18" />
                <span style={{ margin: "0px 3px" }}>
                  <FormattedMessage id="login-language" />
                </span>
                <select defaultValue={lang.locale} onChange={(e) => { handleLangSelect(e.target.value) }}>
                  <option value={"en"}>English</option>
                  <option value={"zh"}>中文 (繁)</option>
                  <option value={"th"}>ไทย</option>
                  <option value={"vi"}>Tiếng Việt</option>
                </select>
              </div>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  )
}