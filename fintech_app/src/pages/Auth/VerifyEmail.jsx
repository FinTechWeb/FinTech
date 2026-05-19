// PAGE: Verify Email
// This is the page where the user types in the 6-digit code
// that was sent to their email after signing up.
// It confirms that the email address belongs to them.
// Route: /verify-email


import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ingredients11Photo from "../../photos/ingredients11.png";

export default function VerifyEmailPage() {
  const navigate = useNavigate();
//   const [code, setCode] = useState("");

  return (
    <div style={{ height: "100vh", background: "#fafafa", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "60px" }}>

      {/* Steps */}
      <div style={{ display: "flex", gap: "40px", marginBottom: "40px", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#888" }}>
          <div style={{ width: "36px", height: "36px", background: "#e6e6e6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>✓</div>
          <span>Sign up</span>
        </div>
         
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", background: "#e60023", color: "white", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>2</div>
          <span style={{ fontWeight: "600" }}>Verify Email</span>
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#bbb" }}>
          <div style={{ width: "36px", height: "36px", background: "#eee", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
          <span>Upload credentials</span>
        </div>
      </div>
      
      

      {/* <div style={{ width: "60%", borderTop: "1px solid #eee", marginBottom: "40px" }} />

      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Verify Email</h2> */}

      {/* Illustration */}
      {/* <div style={{ fontSize: "90px", marginBottom: "20px" }}>📱✅</div> */}

      <div style={{ marginBottom: "20px" }}>
    <img
      src={ingredients11Photo}
      alt="ingredients"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        boxShadow: "white"
        
      }}
    />
  </div>

      {/* <p style={{ textAlign: "center", color: "#555", marginBottom: "30px", lineHeight: "1.6" }}>
        We’ve sent an Email to you <b>your@email.com</b>.<br />
        Please check your inbox to verify
      </p> */}

      {/* Code Input */}
      {/* <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter verification code"
        style={{ padding: "14px", width: "280px", borderRadius: "8px", border: "1px solid #ddd", marginBottom: "30px", fontSize: "15px" }}
      /> */}

      {/* Next Button */}
      <button
        onClick={() => navigate("/upload-id")}
        style={{ padding: "14px 60px", background: "#c6c1c2", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "600", cursor: "pointer", }}
      >
        Next
      </button>
    </div>
  );
}

