// PAGE: Account Limits
// This page shows the user how much money they are allowed to send
// per day, per week, and per month.
// If they want to increase their limit, there is a button to start the process.
// Route: /limits





import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function AccountLimits() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="limits-page">
      <h1 className="limits-page-title">Account limits</h1>
      <p className="limits-page-subtitle">Current limits</p>

      <div className="limits-card">
        <div className="limits-card-row">
          <div className="limits-info">
            <div className="limits-item">
              <p className="limit-item-label">Daily limit</p>
              <p className="limit-item-val">20,000 UK</p>
            </div>
            <div className="limits-item">
              <p className="limit-item-label">Yearly limit</p>
              <p className="limit-item-val">1,000,000 UK</p>
            </div>
          </div>
          <button className="increase-btn" onClick={() => setShowModal(true)}>
            Increase Limits
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-form-group">
              <label className="modal-label">Reason for request</label>
              <div className="modal-select-wrap">
                <select className="modal-select">
                  <option value="">-Select-</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
                <svg className="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label">Enter limit</label>
              <input type="number" className="modal-input" placeholder="" />
            </div>

            <button className="modal-proceed-btn" onClick={() => navigate("/home/residence")}>Proceed</button>
          </div>
        </div>
      )}
    </div>
  );
}



