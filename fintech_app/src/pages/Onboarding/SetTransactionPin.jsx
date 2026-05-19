// PAGE: Set Transaction PIN
// This is the page where the user creates a 4-digit PIN
// that they will use to authorize every money transfer.
// This is Step 4 of the identity verification process.
// Route: /onboarding/set-pin

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SetPin() {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    if (pin.includes("")) {
      alert("Enter complete PIN");
      return;
    }

    // Save pin temporarily
    localStorage.setItem("userPin", pin.join(""));
    navigate("/confirm-pin");
  };

  return (
    <div style={container}>
      <h2>Set Transaction Pin</h2>

      <p style={{ marginTop: "30px" }}>Enter Pin</p>

      <div style={pinContainer}>
        {pin.map((digit, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            maxLength={1}
            style={pinBox}
          />
        ))}
      </div>

      <button style={button} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const container = {
  height: "100vh",
  background: "#f3f3f3",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Arial"
};

const pinContainer = {
  display: "flex",
  gap: "20px",
  marginTop: "20px",
  marginBottom: "30px"
};

const pinBox = {
  width: "60px",
  height: "60px",
  background: "#ccc",
  border: "none",
  textAlign: "center",
  fontSize: "24px",
  borderRadius: "4px"
};

const button = {
  background: "red",
  color: "#fff",
  padding: "12px 50px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};