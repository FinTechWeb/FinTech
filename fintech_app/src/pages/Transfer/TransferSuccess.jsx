// PAGE: Transfer Success (Step 5)
// This is the final step � a success screen with a checkmark
// that tells the user their money was sent successfully.
// There is a button to go back to the dashboard.
// Route: /transfer/success


import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function TransferSuccess() {
  const navigate = useNavigate();

  return (
    <div className="tsuccess-wrapper">
      <div className="tsuccess-card">
        <div className="tsuccess-content">
          <div className="tsuccess-icon-wrap">
            <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h1 className="tsuccess-title">Transfer successful</h1>
          <p className="tsuccess-subtitle">
            Your transfer to Muhammed Ibrahim was successful
          </p>
          <p className="tsuccess-link">
            <span className="tsuccess-red" onClick={() => navigate("/home/receipt")}>Click here</span> to view transaction details
          </p>

          <button className="tsuccess-done-btn" onClick={() => navigate("/home")}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
