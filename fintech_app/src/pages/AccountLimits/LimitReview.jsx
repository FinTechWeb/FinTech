// PAGE: Limit Increase In Review
// This page is shown after the user submits their documents for a limit increase.
// It tells them that their request has been received and is being reviewed �
// usually within 1 to 3 business days.
// Route: /limits/in-review


import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/PageCommon.css";

export default function LimitReview() {
  const navigate = useNavigate();
  useEffect(() => {
  const timer = setTimeout(() => {
    navigate("/success");
  }, 3000); // navigates after 3 seconds

  return () => clearTimeout(timer);
}, []);

  return (
    <div className="review-wrapper">
      <div className="review-card">
        <button className="review-back-btn" onClick={() => navigate("/home")}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8001D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Go home
        </button>

        <div className="review-content">
          <div className="review-icon-wrap">
             <svg width="90" height="90" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2a10 10 0 1 1-7.07 2.93L2 2h5v5L5.64 5.64A8 8 0 1 0 12 4V2z" />
                  <path d="M12 7v5.5l3.5 2" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          </div>

          <h1 className="review-title">Limit increase under review</h1>
          <p className="review-subtitle">
            Your request to upgrade account limits is currently <br />
            being processed. Please wait a moment.
          </p>
        </div>
      </div>
    </div>
  );
}
