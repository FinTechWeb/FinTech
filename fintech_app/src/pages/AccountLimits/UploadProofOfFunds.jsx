// PAGE: Upload Proof of Funds (Limit Increase Step 2)
// This is the second step of the limit increase process.
// The user uploads a document that shows where their money comes from �
// like a payslip or a bank statement.
// Route: /limits/upload-proof-of-funds


import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function UploadProofOfFunds() {
  const navigate = useNavigate();

  return (
    <div className="por-wrapper">
      <div className="por-card">
        <button className="por-back-btn" onClick={() => navigate(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        <div className="por-content">
          <h1 className="por-title">Upload proof of funds</h1>
          <p className="por-subtitle">You are required to provide a proof of source of your funds
             for security purposes. Upload an appointment letter or bank statement
          </p>

          <div className="por-upload-box">
            <input type="file" id="por-file" className="por-file-input" accept=".pdf,.jpg,.jpeg,.png" />
            <label htmlFor="por-file" className="por-upload-label">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8001D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M12 18v-6M9 15l3-3 3 3" />
              </svg>
              <p className="por-upload-text">
                Click to <span className="por-upload-link">Upload</span> or drag and drop
              </p>
              <p className="por-upload-hint">(Max. File size: 25 MB)</p>
            </label>
          </div>

          <button className="por-next-btnn" onClick={() => navigate ("/Review")}>Next</button>
        </div>
      </div>
    </div>
  );
}
