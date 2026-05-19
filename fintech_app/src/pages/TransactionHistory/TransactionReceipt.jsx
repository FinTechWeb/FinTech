// PAGE: Transaction Receipt
// This is the detailed receipt page for a single transaction.
// It shows the full details � recipient, amount, fees, exchange rate,
// reference number, and the date and time of the transfer.
// Route: /transactions/:id/receipt


import { useNavigate } from "react-router-dom";
import "./TransactionReceipt.css";
import 'remixicon/fonts/remixicon.css'

export default function TransactionReceipt() {
  const navigate = useNavigate();

  return (
    <div className="receipt-wrapper">
      <p className="receipt-back" onClick={() => navigate("/home")}>
        <i class="ri-arrow-left-long-line"></i> Go home
      </p>

      <div className="receipt-card">
        <div className="receipt-header">
          <h2 className="receipt-amount">500 UK Sent</h2>
          <p className="receipt-sub">Transfer to Musa Ibrahim</p>
        </div>

        <div className="receipt-section">
          <div className="receipt-row">
            <span className="receipt-label">Reference No</span>
            <span className="receipt-value">89578833456593334</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Status</span>
            <span className="receipt-value">
              <span className="receipt-badge">Success</span>
            </span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Transaction date</span>
            <span className="receipt-value">24th August, 2024</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Recipient</span>
            <span className="receipt-value">Musa Ibrahim</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Amount sent</span>
            <span className="receipt-value">500 UK</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Completed on</span>
            <span className="receipt-value">24th August, 2024. 9:00am</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Fee</span>
            <span className="receipt-value">0</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Payment method</span>
            <span className="receipt-value">Bank transfer</span>
          </div>
        </div>

        <div className="receipt-divider" />

        <p className="receipt-section-title">Receiver details</p>

        <div className="receipt-section">
          <div className="receipt-row">
            <span className="receipt-label">Amount received</span>
            <span className="receipt-value">NGN 850,000</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Bank name</span>
            <span className="receipt-value">United Bank For Africa</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Account number</span>
            <span className="receipt-value">2345236xxx</span>
          </div>
        </div>

        <div className="receipt-actions">
          <button className="receipt-btn receipt-btn--outline">Download PDF</button>
          <button className="receipt-btn receipt-btn--primary">Share PDF</button>
        </div>
      </div>
    </div>
  );
}
