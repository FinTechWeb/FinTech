import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./dashboard.css";
import utd from "../../assets/united.png"
import flg from "../../assets/nflg.png"

export default function TransferBox() {
  const navigate = useNavigate();
   const [modal, setModal] = useState(null); // 'reason' | 'pin' | 'confirm'
  const [pin, setPin] = useState(["", "", "", ""]);

   const handlePinChange = (val, index) => {
    const newPin = [...pin];
    newPin[index] = val.slice(-1);
    setPin(newPin);
    if (val && index < 3) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  return (
    <div className="send-money-page">
      <button className="back-btn" onClick={() => navigate("/home")}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back
      </button>

      <div className="transfer-box" style={{ display: "block" }}>
        <h3 className="transfer-title">Make a Transfer</h3>

        <div className="form-group">
          <label className="form-label">You send</label>
          <div className="form-field">
            <input type="number" defaultValue="500" className="form-input" />
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

        <button className="send-btn"  onClick={() => setModal("reason")}>
          Send
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>

         {/* MODAL 1 — Reason for transfer */}
      {modal === "reason" && (
        <div className="tx-modal-overlay" onClick={() => setModal(null)}>
          <div className="tx-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="tx-modal-form-group">
              <label className="tx-modal-label">Reason for transfer</label>
              <div className="tx-modal-select-wrap">
                <select className="tx-modal-select">
                  <option value="">-Select-</option>
                  <option value="family">Family support</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
                <svg className="tx-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className="tx-modal-form-group">
              <label className="tx-modal-label">Select source of funds</label>
              <div className="tx-modal-select-wrap">
                <select className="tx-modal-select">
                  <option value="">-Select-</option>
                  <option value="salary">Salary</option>
                  <option value="savings">Savings</option>
                  <option value="business">Business income</option>
                  <option value="other">Other</option>
                </select>
                <svg className="tx-select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>

            <div className="tx-modal-checkbox-row">
              <input type="checkbox" id="tx-terms" className="tx-checkbox" />
              <label htmlFor="tx-terms" className="tx-checkbox-label">
                I agree to the <span className="tx-link-red">terms & conditions</span> and <span className="tx-link-red">privacy policy</span>
              </label>
            </div>

            <button className="tx-modal-send-btn" onClick={() => setModal("pin")}>
              Send now
            </button>
          </div>
        </div>
      )}

      {/* MODAL 2 — Transaction pin */}
      {modal === "pin" && (
        <div className="tx-modal-overlay" onClick={() => setModal(null)}>
          <div className="tx-modal-box tx-modal-box--center" onClick={(e) => e.stopPropagation()}>
            <h3 className="tx-modal-pin-title">Please enter your pin</h3>

            <div className="tx-pin-row">
              {pin.map((val, i) => (
                <input
                  key={i}
                  id={`pin-${i}`}
                  type="password"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handlePinChange(e.target.value, i)}
                  className="tx-pin-input"
                />
              ))}
            </div>

            <button className="tx-modal-send-btn" onClick={() => setModal("confirm")}>
              Submit
            </button>
          </div>
        </div>
      )}

      {/* MODAL 3 — Confirm */}
      {modal === "confirm" && (
        <div className="tx-modal-overlay" onClick={() => setModal(null)}>
          <div className="tx-modal-box tx-modal-box--center" onClick={(e) => e.stopPropagation()}>
            <h3 className="tx-modal-confirm-title">Are you sure you want to proceed?</h3>

            <div className="tx-confirm-btns">
              <button className="tx-confirm-no" onClick={() => setModal(null)}>No</button>
              <button className="tx-confirm-yes" onClick={() => navigate("/home/review")}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}