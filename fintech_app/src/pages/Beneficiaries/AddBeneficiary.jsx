// PAGE: Add Beneficiary
// This is the page where the user adds a new person to send money to.
// They fill in the person's full name, bank name, account number, and country.
// Route: /beneficiaries/add


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddBeneficiary.css";

export default function AddBeneficiary() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    accountName: "",
    bank: "",
    accountNumber: "",
    bankLocation: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="beneficiary-container">

      {/* Back */}
       <i class="ri-arrow-left-long-line"onClick={() => navigate("/home")}></i> 

      {/* Title */}
      <h2 className="title">Add a beneficiary</h2>

      {/* Form */}
      <h3 className="details">Bank Account Details</h3>

      <form className="form-box" onSubmit={handleSubmit}>

        <div className="grid">

          <div className="field">
            <label>Account name</label>
            <input
              type="text"
              name="accountName"
              value={form.accountName}
              onChange={handleChange}
              placeholder="Enter account name"
            />
          </div>

          <div className="field">
            <label>Bank</label>
            <select
              name="bank"
              value={form.bank}
              onChange={handleChange}
            >
              <option value="">Select bank</option>
              <option value="gtb">GTBank</option>
              <option value="access">Access Bank</option>
              <option value="uba">UBA</option>
            </select>
          </div>

          <div className="field">
            <label>Account number</label>
            <input
              type="text"
              name="accountNumber"
              value={form.accountNumber}
              onChange={handleChange}
              placeholder="Enter account number"
            />
          </div>

          <div className="field">
            <label>Bank location</label>
            <input
              type="text"
              name="bankLocation"
              value={form.bankLocation}
              onChange={handleChange}
              placeholder="Enter bank location"
            />
          </div>

        </div>

        <p className="warning">
          Please enter the correct beneficiary account information to prevent potential delay in the transaction process.
        </p>

        <button className="submit-btn" type="submit" onClick={() => navigate("/home")}>
          Add Beneficiary
        </button>

      </form>
    </div>
  );
}