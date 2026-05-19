// PAGE: Review Transfer (Step 2)
// This is the second step of sending money.
// Before the money is sent, the user sees a full summary of the transfer �
// recipient name, amount, fees, and the exchange rate.
// They can go back to edit or tap Confirm to proceed.
// Route: /transfer/review


import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function ReviewTransfer() {
  const navigate = useNavigate();

  return (
    <div className="review-page">
      {/* Header */}
      <div className="review-page-header">
        <button className="review-page-back" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <h2 className="review-page-title">Review</h2>
        <div style={{ width: 20 }} />
      </div>

      {/* Transaction details */}
      <div className="review-section">
        <div className="review-row">
          <span className="review-row-label">Reference No</span>
          <span className="review-row-val">89578833456593334</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Transaction date</span>
          <span className="review-row-val">24th August, 2024</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Recipient</span>
          <span className="review-row-val">Musa Ibrahim</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Amount to send</span>
          <span className="review-row-val">500 UK</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Charges</span>
          <span className="review-row-val">0</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Payment method</span>
          <span className="review-row-val">Bank transfer</span>
        </div>
      </div>

      {/* Receiver's details */}
      <div className="review-section">
        <h3 className="review-section-title">Receiver's details</h3>
        <div className="review-row">
          <span className="review-row-label">Account name</span>
          <span className="review-row-val">Musa Mamman Ibrahim</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Amount to receive</span>
          <span className="review-row-val">NGN 850,000</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Recipient</span>
          <span className="review-row-val">Musa Ibrahim</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Bank name</span>
          <span className="review-row-val">United bank for Africa</span>
        </div>
        <div className="review-row">
          <span className="review-row-label">Account number</span>
          <span className="review-row-val">23482930445</span>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="review-checks">
        <div className="review-check-item">
          <input type="checkbox" className="review-checkbox" defaultChecked />
          <p className="review-check-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, lorem ipsum dolor sit consectetur adipiscing elit. Vivamus elit.</p>
        </div>
        <div className="review-check-item">
          <input type="checkbox" className="review-checkbox" defaultChecked />
          <p className="review-check-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, lorem ipsum dolor sit consectetur adipiscing elit.</p>
        </div>
        <div className="review-check-item">
          <input type="checkbox" className="review-checkbox" defaultChecked />
          <p className="review-check-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros tortor, lorem ipsum dolor sit consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="review-page-btns">
        <button className="review-edit-btn" onClick={() => navigate(-1)}>Edit</button>
        <button className="review-pay-btn" onClick={ () => navigate("/home/notice")}>Make payment</button>
      </div>
    </div>
  );
}
