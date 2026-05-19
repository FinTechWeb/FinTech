// PAGE: Transaction History
// This page shows a list of all past transfers the user has made.
// Each item shows the recipient name, amount sent, date, and transfer status.
// Tapping on a transaction takes the user to the Transaction Receipt page.
// Route: /transactions







import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transaction.css";

const mockData = [
  { id: 1, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 2, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 3, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 4, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 5, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 6, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 7, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
];

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="21" y1="6" x2="3" y2="6" /><line x1="17" y1="12" x2="7" y2="12" /><line x1="13" y1="18" x2="11" y2="18" />
    </svg>
  );
}

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState("");

  const filtered = mockData.filter((row) => {
    const matchSearch =
      !search ||
      row.ref.includes(search) ||
      row.recipient.toLowerCase().includes(search.toLowerCase());
    const matchFilter = !filter || row.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="tx-wrapper">
      <h2 className="tx-title">Transactions</h2>

      <div className="tx-controls">
        <div className="tx-search-wrap">
          <span className="tx-search-icon"><SearchIcon /></span>
          <input
            className="tx-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="tx-date-wrap">
          <input
            className="tx-input tx-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="tx-date-icon"><CalendarIcon /></span>
        </div>

        <div className="tx-filter-wrap">
          <select
            className="tx-input tx-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">Filter</option>
            <option value="Successful">Successful</option>
          </select>
          <span className="tx-filter-icon"><FilterIcon /></span>
        </div>
      </div>

      <div className="tx-table-wrap">
        <table className="tx-table">
          <thead>
            <tr>
              <th>Reference</th>
              <th>Amount Sent</th>
              <th>Rate</th>
              <th>Channel</th>
              <th>Recipient</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row, i) => (
                // <tr key={row.id} className={i % 2 !== 0 ? "tx-row-alt" : ""}>
                <tr
                  key={row.id}
                  className={i % 2 !== 0 ? "tx-row-alt" : ""}
                  onClick={row.id === 1 ? () => navigate("/home/receipt") : undefined}
                  style={row.id === 1 ? { cursor: "pointer" } : {}}
>
                  <td>{row.ref}</td>
                  <td>{row.amount}</td>
                  <td>{row.rate}</td>
                  <td>{row.channel}</td>
                  <td>{row.recipient}</td>
                  <td>
                    <span className={`tx-badge tx-badge--${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="tx-empty">No transactions found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

            {/* MOBILE LIST VIEW */}
      <div className="tx-mobile-list">
        {filtered.length > 0 ? (
          filtered.map((row, i) => (
            <div
              key={row.id}
              className="tx-mobile-row"
              onClick={row.id === 1 ? () => navigate("/home/receipt") : undefined}
              style={row.id === 1 ? { cursor: "pointer" } : {}}
            >
              <div className="tx-mobile-left">
                <div className="tx-mobile-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8001D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                  </svg>
                </div>
                <div>
                  <p className="tx-mobile-name">Transfer to {row.recipient}</p>
                  <p className="tx-mobile-date">Sep 9th, 10:00 am</p>
                </div>
              </div>
              <div className="tx-mobile-right">
                <p className="tx-mobile-amount">NGN 850,000</p>
                <span className={`tx-badge tx-badge--${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="tx-empty">No transactions found</p>
        )}
      </div>
    </div>
  );
}

