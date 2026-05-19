// PAGE: Transfer Receipt (Step 4)
// This is the fourth step. After the transfer is processed,
// the user sees a receipt with all the details of the completed transfer
// including a unique reference number.
// Route: /transfer/receipt


import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function TransferNotice() {
  const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="notice-wrapper">
      <div className="notice-content">
        <h1 className="notice-title">Important Notice!</h1>
        <p className="notice-text">
          To complete transfer, payment must come from sender's account only.
        </p>
        <p className="notice-text">
          Please transfer funds directly to your Frica Xchange unique bank account as shown below
        </p>
        <p className="notice-ref">
          Your transaction reference number is{" "}
          <span className="notice-red">88838445532223</span>
        </p>

        <div className="notice-account">
          <p className="notice-account-row">
            Account name: <span className="notice-red">{user?.firstName} {user?.lastName}</span>
          </p>
          <p className="notice-account-row">
            Account number: <span className="notice-red">9867523456</span>
          </p>
        </div>

        <button className="notice-done-btn" onClick={() => navigate("/home/transfer-success")}>
          Done
        </button>
      </div>
    </div>
  );
}
