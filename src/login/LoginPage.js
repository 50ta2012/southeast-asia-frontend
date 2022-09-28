
import "./css/login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-header">
          <h1>
            東南亞車牌辨識系統
          </h1>
        </div>
        <div className="login-body">
          <form action="/login" method="post">
            <div className="form-group mb-3">
              <label>帳號</label>
              <input type="text" className="form-control" id="username" name="username" placeholder="請輸入帳號" />
            </div>
            <div className="form-group mb-3">
              <label>密碼</label>
              <input type="password" className="form-control" id="password" name="password" placeholder="請輸入密碼" />
            </div>
            <div className="form-button d-grid mb-3">
              <button className="btn btn-dark">登入</button>
            </div>
            <div className="link-container">
              <div>
                <img src="/svg/person-fill.svg" alt="" height="18" width="18" />
                <a href="/regis">註冊新用戶</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}