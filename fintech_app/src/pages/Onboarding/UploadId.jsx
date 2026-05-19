
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/PageCommon.css";

export default function UploadID() {
  const navigate = useNavigate();

  return (
    <div className="uid-wrapper">

      {/* Steps */}
      <div className="uid-steps">
        <div className="uid-step">
          <div className="uid-step-done">✓</div>
          <span className="uid-step-label">Sign up</span>
        </div>
        <div className="uid-step">
          <div className="uid-step-done">✓</div>
          <span className="uid-step-label">Verify Email</span>
        </div>
        <div className="uid-step">
          <div className="uid-step-active">3</div>
          <span className="uid-step-label">Upload credentials</span>
        </div>
      </div>

      <hr className="uid-divider" />

      {/* Title */}
      <div className="uid-title-wrap">
        <h2 className="uid-title">Upload a valid ID</h2>
        <p className="uid-subtitle">
          Please upload a valid National Identification card,
          driver's license or voters card
        </p>
      </div>

      {/* Form wrap - controls order on desktop vs mobile */}
      <div className="uid-form-wrap">

        {/* Upload Box - top on desktop, bottom on mobile */}
        <div className="uid-upload-box">
          <p className="uid-upload-link">Click to Upload</p>
          <p className="uid-upload-hint">or drag and drop (Max file size: 25 MB)</p>
        </div>

        {/* Inputs - bottom on desktop, top on mobile */}
        <div className="uid-inputs-section">
          <div className="uid-inputs-row">
            <div className="uid-form-group">
              <label className="uid-label">Valid ID type</label>
              <select className="uid-input">
                <option>-select-</option>
                <option>National ID</option>
                <option>Driver's License</option>
                <option>Voter's Card</option>
              </select>
            </div>
            <div className="uid-form-group">
              <label className="uid-label">Serial No</label>
              <input type="text" placeholder="Serial no" className="uid-input" />
            </div>
          </div>

          <div className="uid-inputs-row">
            <div className="uid-form-group">
              <label className="uid-label">Exp date</label>
              <input type="text" placeholder="DD/MM/YYYY" className="uid-input" />
            </div>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="uid-btn-wrap">
        <button className="uid-next-btn" onClick={() => navigate("/upload-passport")}>
          Next
        </button>
      </div>

    </div>
  );
}