// PAGE: Limit Increase Success
// This is the success page shown when the user's limit increase has been approved.
// It congratulates them and tells them their new limits are now active.
// Route: /limits/success


import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function LimitSuccess() {
  const navigate = useNavigate();

  return (
    <div className="success-wrapper">
      <div className="success-card">
        <div className="success-content">
          <div className="success-icon-wrap">
            <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="success-title">Limit increased successfully</h1>
          <p className="success-subtitle">Your account limit has been increased!</p>

          <button className="success-done-btn" onClick={() => navigate("/home")}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

