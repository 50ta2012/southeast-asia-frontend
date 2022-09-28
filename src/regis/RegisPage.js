
import "./css/regis.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

export default function RegisPage() {
  /* Bootstrap Modal */
  const [errorModal, setErrorModal] = useState(false);
  const errorShow = () => setErrorModal(true);
  const errorHide = () => setErrorModal(false);

  const [successModal, setSuccessModal] = useState(false);
  const successShow = () => setSuccessModal(true);
  const successHide = () => setSuccessModal(false);

  /* Modal Message */
  const [errorModalMessage, setErrorModalMessage] = useState("");

  /* Submit Process */
  const submit = async () => {
    const displayName = document.getElementById("displayName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    const token = document.getElementById("token").value;

    const postData = {
      displayName: displayName,
      username: username,
      password: password,
      token: token
    }

    try{
      const res = await fetch("http://localhost:18000/account/add", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      successShow();
    }catch(err){
      setErrorModalMessage("請求發生錯誤，請連絡系統管理員");
      errorShow();
      console.log(err);
    }  
  }

  return (
    <>
      <div className="regis-container">
        <div className="regis-form">
          <div className="regis-header">
            <h1>
              東南亞車牌辨識系統
            </h1>
          </div>
          <div className="regis-body">
            <div className="form-group">
              <label>姓名</label>
              <input type="text" className="form-control" id="displayName" name="displayName" placeholder="請輸入姓名" />
            </div>
            <div className="form-group">
              <label>帳號</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="請輸入帳號" />
              <small className="form-text">* 至少 4 碼，由小寫英文字母和數字組成</small>
            </div>
            <div className="form-group">
              <label>密碼</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="請輸入密碼" />
              <small className="form-text">* 至少 8 碼，最少有一個英文字母和數字</small>
            </div>
            <div className="form-group">
              <label>確認密碼</label>
              <input type="password" className="form-control" id="password-confirm" name="password-confirm" placeholder="請輸入確認密碼" />
            </div>
            <div className="form-group">
              <label>驗證碼</label>
              <input type="password" className="form-control" id="token" name="token" placeholder="請輸入驗證碼" />
            </div>

            <div className="form-button d-grid mb-4">
              <button className="btn btn-dark" onClick={submit}>註冊</button>
            </div>

            <div className="regis-link">
              <img src="/svg/arrow-counterclockwise.svg" alt="" height="18" width="18" />
              <a href="/">回首頁</a>
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