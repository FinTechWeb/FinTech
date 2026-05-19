// PAGE: Proof of Residence
// This is the page where the user uploads a document that proves where they live.
// For example a utility bill or a bank statement.
// This is Step 3 of the identity verification process.
// Route: /onboarding/proof-of-residence

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Residence() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#fff", height: "100vh", fontFamily: "Arial" }}>
      
      {/* Steps */}
      <div style={{ padding: "40px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          
          {/* Step 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={stepDone}>✓</div>
            <span>Sign up</span>
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={stepDone}>✓</div>
            <span>Verify Email</span>
          </div>

          {/* Step 3 */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={stepActive}>3</div>
            <span>Upload credentials</span>
          </div>
        </div>

        <hr style={{ margin: "20px 0", borderColor: "#eee" }} />

        {/* Title */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2>Upload proof of residence</h2>
          <p style={{ color: "#777" }}>
            Please upload a document that proves where you reside
          </p>
        </div>

        {/* Upload Box */}
        <div style={uploadBox}>
          <p style={{ color: "red", cursor: "pointer" }}>
            Click to Upload
          </p>
          <p style={{ fontSize: "12px", color: "#999" }}>
            or drag and drop (Max file size: 25 MB)
          </p>
        </div>

       

        
        {/* Button */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button style={nextBtn} onClick={() => navigate("/")}>
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

const stepDone = {
  width: "30px",
  height: "30px",
  borderRadius: "6px",
  background: "#eee",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "red",
  fontWeight: "bold"
};

const stepActive = {
  width: "30px",
  height: "30px",
  borderRadius: "6px",
  background: "red",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const uploadBox = {
  border: "2px dashed #ddd",
  padding: "40px",
  margin: "30px auto",
  width: "400px",
  textAlign: "center",
  borderRadius: "10px"
};

const inputStyle = {
  padding: "12px",
  width: "200px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const nextBtn = {
  background: "red",
  color: "#fff",
  padding: "12px 40px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};