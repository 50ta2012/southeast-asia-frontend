
import "./css/regis.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import globeSvg from "../web/image/globe.svg";
import { FormattedMessage, useIntl } from 'react-intl';
import { useContext } from "react";
import { LangContext } from "../App";
import messageInZh from "../language/zh.json";
import messageInEn from "../language/en.json";
import messageInTh from "../language/th.json";
import messageInVi from "../language/vi.json";
import { Link } from "react-router-dom";

export default function RegisPage() {
  /* Language Select */
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

  /* Bootstrap Modal */
  const [errorModal, setErrorModal] = useState(false);
  const errorShow = () => setErrorModal(true);
  const errorHide = () => setErrorModal(false);

  const [successModal, setSuccessModal] = useState(false);
  const successShow = () => setSuccessModal(true);
  const successHide = () => setSuccessModal(false);

  /* Modal Message */
  const [errorModalMessage, setErrorModalMessage] = useState("");

  /* Format Validation */
  function validateUsername(username) {
    const reg = /[a-z0-9]{4}/;

    return reg.test(username);
  }

  function validatePassword(password = "") {
    const reg = /(?=.*[0-9])(?=.*[a-zA-Z]){8}/;

    return reg.test(password);
  }

  /* Clear Input */
  function allInputClear() {
    document.getElementById("displayName").value = "";
    document.getElementById("token").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  }

  /* Submit Process */
  const submit = async () => {
    const displayName = document.getElementById("displayName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    const token = document.getElementById("token").value;

    if (displayName === "" || username === "" || password === "" || passwordConfirm === "" || token === "") {
      setErrorModalMessage("所有欄位都不可空白");
      errorShow();

      return;
    } else if (!validateUsername(username) || !validatePassword(password) || password !== passwordConfirm) {

      const errorMessage = [];

      if (!validateUsername(username)) {
        errorMessage.push("帳號至少 4 碼，由小寫英文字母和數字組成");
      }

      if (!validatePassword(password)) {
        errorMessage.push("密碼至少 8 碼，最少有一個英文字母和數字");
      }

      if (password !== passwordConfirm) {
        errorMessage.push("密碼不相符");
      }

      const errorElements = errorMessage.map((value, index) => <p key={index}>{value}</p>);

      // Reset password input
      document.getElementById("password").value = "";
      document.getElementById("password-confirm").value = "";

      setErrorModalMessage(errorElements);
      errorShow();

      return;
    } else {
      /* 所有輸入欄位正確，送出註冊請求 */
      const postData = {
        displayName: displayName,
        username: username,
        password: password,
        token: token
      }

      // const serverUrl = "https://twowayiot.com";
      const serverUrl = window.location.origin;

      try {
        const res = await fetch(`${serverUrl}/account/add`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });

        const response = await res.json();

        if (response.status === "error") {
          const errorMessage = [];

          if (response?.username === "existed") {
            errorMessage.push("帳號重覆");
          }

          if (response?.token === "mismatched") {
            errorMessage.push("驗證碼錯誤");
          }

          const errorElements = errorMessage.map((value, index) => <p key={index}>{value}</p>);

          // Reset password input
          document.getElementById("password").value = "";
          document.getElementById("password-confirm").value = "";

          setErrorModalMessage(errorElements);
          errorShow();
        } else {
          allInputClear();
          successShow();
        }

      } catch (err) {
        // Reset password input
        document.getElementById("password").value = "";
        document.getElementById("password-confirm").value = "";

        setErrorModalMessage("請求發生錯誤，請連絡系統管理員");
        errorShow();
        console.log(err);
      }
    }
  }

  return (
    <>
      <div className="regis-container">
        <div className="regis-form">
          <div className="regis-header">
            <h1>
              <FormattedMessage id="header-title" />
            </h1>
          </div>
          <div className="regis-body">
            <div className="form-group">
              <label>
                <FormattedMessage id="regis-label-name" />
              </label>
              <input type="text" className="form-control" id="displayName" name="displayName" placeholder={
                useIntl().formatMessage({ id: "regis-holder-name" })
              } />
            </div>
            <div className="form-group">
              <label>
                <FormattedMessage id="regis-label-username" />
              </label>
              <input type="text" className="form-control" id="username" name="username" placeholder={
                useIntl().formatMessage({ id: "regis-holder-username" })
              } />
              <small className="form-text">
                <FormattedMessage id="regis-username-hint" />
              </small>
            </div>
            <div className="form-group">
              <label>
                <FormattedMessage id="regis-label-password" />
              </label>
              <input type="password" className="form-control" id="password" name="password" placeholder={
                useIntl().formatMessage({ id: "regis-holder-password" })
              } />
              <small className="form-text">
                <FormattedMessage id="regis-password-hint" />
              </small>
            </div>
            <div className="form-group">
              <label>
                <FormattedMessage id="regis-label-confirm-password" />
              </label>
              <input type="password" className="form-control" id="password-confirm" name="password-confirm" placeholder={
                useIntl().formatMessage({ id: "regis-holder-confirm-password" })
              } />
            </div>
            <div className="form-group">
              <label>
                <FormattedMessage id="regis-label-token" />
              </label>
              <input type="password" className="form-control" id="token" name="token" placeholder={
                useIntl().formatMessage({ id: "regis-holder-token" })
              } />
            </div>

            <div className="form-button d-grid mb-4">
              <button className="btn btn-dark" onClick={submit}>
                <FormattedMessage id="regis-submit" />
              </button>
            </div>

            <div className="regis-link">
              <div></div>
              <div>
                <img src="/svg/arrow-counterclockwise.svg" alt="" height="18" width="18" />
                <Link to={"/login"}>
                  <FormattedMessage id="regis-return" />
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
          </div>
        </div>
      </div>

      <Modal show={errorModal} onHide={errorHide} animation={false} centered>
        <Modal.Body>
          <div style={{ "fontSize": "1.4rem", "color": "red", "textAlign": "center" }}>錯誤</div>
          <hr />
          <div className="modal-text" style={{ "fontSize": "1.4rem", "color": "red", "textAlign": "center" }}>
            {errorModalMessage}
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={successModal} onHide={successHide} animation={false} centered>
        <Modal.Body>
          <div style={{ "fontSize": "1.4rem", "color": "green", "textAlign": "center" }}>成功</div>
          <hr />
          <div className="modal-text" style={{ "fontSize": "1.4rem", "color": "green", "textAlign": "center" }}>
            <p>註冊成功</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}