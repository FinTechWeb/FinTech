// PAGE: Beneficiary List
// This page shows all the people the user has saved to send money to.
// Each person's name, bank, and account number is shown.
// There is also a button to add a new beneficiary.
// Route: /beneficiaries

// PAGE: Beneficiary List
// Static UI showing a list of saved beneficiaries.
// Route: /home/beneficiaries

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Beneficiary.css";

const mockBeneficiaries = [
  { id: 1, name: "John Swead", country: "NGR", currency: "Naira" },
  { id: 2, name: "John Swead", country: "NGR", currency: "Naira" },
  { id: 3, name: "John Swead", country: "NGR", currency: "Naira" },
  { id: 4, name: "John Swead", country: "NGR", currency: "Naira" },
];

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function BeneficiaryList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = mockBeneficiaries.filter((b) =>
    !search || b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ben-wrapper">
      <div className="ben-topbar">
        <h2 className="ben-title">Beneficiary</h2>
        <button className="ben-add-btn" onClick={ () => navigate("/AddBene")}>
          <i className="ri-user-add-line" />
          Add beneficiary 
        </button>
      </div>

      <div className="ben-search-wrap">
        <input
          className="ben-search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="ben-search-icon"><SearchIcon /></span>
      </div>

      <div className="ben-card">
        <table className="ben-table">
          <thead>
            <tr>
              <th>Account name</th>
              <th>Country</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((b) => (
                <tr key={b.id} className="ben-row">
                  <td className="ben-name">{b.name}</td>
                  <td className="ben-country">{b.country}- &nbsp;{b.currency}</td>
                  <td><span className="ben-view">View</span></td>
                  <td><span className="ben-delete">Delete</span></td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="ben-empty">No beneficiaries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}





