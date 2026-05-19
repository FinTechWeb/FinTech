import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmPin() {
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

  // ✅ Use newPin instead of pin (IMPORTANT)
  if (index === 3 && value) {
    const enteredPin = newPin.join("");
    const savedPin = localStorage.getItem("userPin");

    if (enteredPin === savedPin) {
      alert("PIN set successfully ✅");
      navigate("/signin");
    } else {
      alert("PIN does not match ❌");
      setPin(["", "", "", ""]);
      inputsRef.current[0].focus();
    }
  }
};

  const handleSubmit = () => {
    const savedPin = localStorage.getItem("userPin");

    if (pin.join("") === savedPin) {
      alert("PIN set successfully ✅");
      navigate("/login");
    } else {
      alert("PIN does not match ❌");
      setPin(["", "", "", ""]);
      inputsRef.current[0].focus();
    }
  };

  return (
    <div style={container}>
      <h2>Confirm Pin</h2>

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