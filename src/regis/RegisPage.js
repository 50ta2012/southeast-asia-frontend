
import "./css/regis.css";

export default function RegisPage() {
  return (
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


          <div className="form-button d-grid mb-4">
            <button className="btn btn-dark">註冊</button>
          </div>

          <div className="regis-link">
            <img src="/svg/arrow-counterclockwise.svg" alt="" height="18" width="18" />
            <a href="/">回首頁</a>
          </div>
        </div>
      </div>
    </div>
  )
}