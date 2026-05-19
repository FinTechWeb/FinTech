// PAGE: Dashboard (Home)
// This is the main home page after the user logs in.
// It shows the user's account balance, quick action buttons like 'Send Money',
// and a list of their most recent transactions.
// Route: /home


import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import beth from "../../assets/beth.png"
import isha from "../../assets/Isha.png"
import Mur from "../../assets/Mur.png"
import flg from "../../assets/nflg.png"
import icon from "../../assets/cons.png"
import utd from "../../assets/united.png"

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const handleLogout = () => {
  sessionStorage.removeItem("user");
  navigate("/signin");
};

  return (
    <div className="dashboard">
      <h1 className="dash-title">Welcome , {user?.firstName}!</h1>

      <div className="dash-inner">
        <div className="dash-left">

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-icon-wrap">
                <img src={icon} alt="" />
              </div>
              <div className="stat-text">
                <div className="stat-num">20</div>
                <div className="stat-label">Transfers made</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <img src={icon} alt="" />
              </div>
              <div className="stat-text">
                <div className="stat-num">5</div>
                <div className="stat-label">Beneficiaries</div>
              </div>
            </div>
          </div>

          {/* Recent Transfers */}
          <div className="section-card transfer-section">
            <h3 className="section-title" onClick={() => window.innerWidth <= 768 && navigate("/home/transferbox")} style={{ cursor:  window.innerWidth <= 768 ?"pointer" : "default" }}>
            Recent transfers →</h3>
            <div className="transfers-list">
              <div className="transfer-row">
                <div className="transfer-avatar">
                  <img src={beth} alt="" />
                </div>
                <span className="transfer-name">Elizabeth Moses</span>
                <span className="transfer-flag"><img src={flg} alt="" /></span>
                <span className="transfer-amount">NGN 650,000</span>
                <span className="badge-success">Successful</span>
                <button className="view-btn">View</button>
              </div>

              <div className="transfer-row">
                <div className="transfer-avatar">
                  <img src={isha} alt="" />
                </div>
                <span className="transfer-name">Aisha Ibrahim</span>
                <span className="transfer-flag"><img src={flg} alt="" /></span>
                <span className="transfer-amount">NGN 850,000</span>
                <span className="badge-success">Successful</span>
                <button className="view-btn">View</button>
              </div>

              <div className="transfer-row">
                <div className="transfer-avatar">
                  <img src={Mur} alt="" />
                </div>
                <span className="transfer-name">Murtala Muktar</span>
                <span className="transfer-flag"><img src={flg} alt="" /></span>
                <span className="transfer-amount">NGN 850,000</span>
                <span className="badge-success">Successful</span>
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>

            <button className="send-money-btn" onClick={() => navigate("/home/transferbox")}>
          Send money
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
        </button>
       

          {/* Current Limits */}
          <div className="section-card limits-section">
            <h3 className="section-title">Current limits</h3>
            <div className="limits-row">
              <div>
                <p className="limit-label">Daily limit</p>
                <p className="limit-val">20,000 UK</p>
              </div>
              <div>
                <p className="limit-label">Yearly limit</p>
                <p className="limit-val">1,000,000 UK</p>
              </div>
            </div>
            <p className="limits-note">
              If you want higher limits, temporarily or permanently,{" "}
              <span className="link-red">click here</span>
            </p>
          </div>
        </div>

        

        {/* TRANSFER FORM */}
        <div className="transfer-box">
          <h3 className="transfer-title">Make a Transfer</h3>

          <div className="form-group">
            <label className="form-label">You send</label>
            <div className="form-field">
              <input type="number" defaultValue="500" className="form-input" readOnly />
              <span className="form-flag">
                <img src={utd} className="utd" />
                 UK ▾</span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Payment method</label>
            <div className="form-field form-select">
              <span className="form-select-text">Bank transfer</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="transfer-divider">
            <div className="divider-circle">
             
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Recipient gets</label>
            <div className="form-field">
              <span className="form-recv-amount">850,000</span>
              <span className="form-flag">
                  <img src={flg} className="utd" />
                 NGN ▾</span>
            </div>
          </div>

          <div className="rate-row">
            <span className="rate-label"><span className="dot-red"></span>Rate</span>
            <span className="rate-val">1 UK = 1,700 NGN</span>
          </div>
          <div className="rate-row">
            <span className="rate-label"><span className="dot-red"></span>Charges</span>
            <span className="rate-val">0</span>
          </div>

          <button className="send-btn">
            Send
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="dash-header-row">
  
  <button className="logout-btn" onClick={handleLogout}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
    </svg>
    Logout
  </button>
      </div>
    </div>
  );
}
