import { useState, useMemo } from "react";
import "./TransactionHistory.css";

const AVATAR_SRC = "data:image/png;base64,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";

const transactions = [
  { id: 1, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 2, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 3, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 4, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 5, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 6, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
  { id: 7, ref: "6764567892902", amount: "US 200", rate: "1,700", channel: "Bank transfer", recipient: "Muhammed Muktar", status: "Successful" },
];

const STATUS_FILTERS = ["All", "Successful", "Pending", "Failed"];
const COL_LABELS = ["Reference", "Amount Sent", "Rate", "Channel", "Recipient", "Status"];

const NAV_ITEMS = [
  { id: "home",          label: "Home",                Icon: HomeIcon },
  { id: "history",       label: "Transaction History", Icon: HistoryIcon },
  { id: "beneficiaries", label: "Beneficiaries",       Icon: BeneficiariesIcon },
  { id: "limits",        label: "Account limits",      Icon: ShieldIcon },
  { id: "profile",       label: "Profile",             Icon: PersonIcon },
];

export default function TransactionHistory({ onNavigate }) {
  const [search, setSearch]           = useState("");
  const [filterIndex, setFilterIndex] = useState(0);
  const activeFilter                  = STATUS_FILTERS[filterIndex];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return transactions.filter((t) => {
      const matchSearch = !q || t.ref.includes(q) || t.recipient.toLowerCase().includes(q);
      const matchFilter = activeFilter === "All" || t.status === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [search, filterIndex]);

  const cycleFilter = () => setFilterIndex((i) => (i + 1) % STATUS_FILTERS.length);

  return (
    <div className="th-root">

      {/* ── Sidebar ── */}
      <aside className="th-sidebar">
        <div className="th-logo">Logo</div>
        <nav className="th-nav">
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const active = id === "history";
            return (
              <button
                key={id}
                onClick={() => onNavigate?.(id)}
                className={`th-nav-item${active ? " active" : ""}`}
              >
                <Icon size={20} color={active ? "#fff" : "#555"} />
                <span className="th-nav-label">{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main ── */}
      <div className="th-main">

        {/* Topbar */}
        <header className="th-topbar">
          <div className="th-topbar-spacer" />
          <div className="th-user-area">
            <div className="th-avatar-wrap">
              <img src={AVATAR_SRC} alt="Kabir Akinola" className="th-avatar-img" />
            </div>
            <span className="th-user-name">Kabir Akinola</span>
            <svg className="th-chevron" width={14} height={14} viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="th-bell-wrap">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.73 21a2 2 0 01-3.46 0" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="th-bell-dot" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="th-content">
          <h1 className="th-page-title">Transactions</h1>

          {/* Toolbar */}
          <div className="th-toolbar">
            <div className="th-search-wrap">
              <SearchIcon />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="th-search-input"
              />
            </div>
            <button className="th-toolbar-btn">
              <CalendarIcon />
              <span className="th-btn-text">Select date</span>
            </button>
            <button
              onClick={cycleFilter}
              className={`th-toolbar-btn${filterIndex !== 0 ? " active" : ""}`}
            >
              <FilterIcon />
              <span className="th-btn-text">{activeFilter === "All" ? "Filter" : activeFilter}</span>
            </button>
          </div>

          {/* Column headers */}
          <div className="th-col-headers">
            {COL_LABELS.map((h) => <span key={h}>{h}</span>)}
          </div>

          {/* Rows */}
          <div className="th-rows">
            {filtered.length === 0 ? (
              <div className="th-empty">No transactions match your search.</div>
            ) : (
              filtered.map((t) => (
                <div key={t.id} className="th-row">
                  <span data-label="Reference">{t.ref}</span>
                  <span data-label="Amount">{t.amount}</span>
                  <span data-label="Rate">{t.rate}</span>
                  <span data-label="Channel">{t.channel}</span>
                  <span data-label="Recipient">{t.recipient}</span>
                  <span data-label="Status" className={`th-status ${t.status}`}>
                    {t.status}
                  </span>
                </div>
              ))
            )}
          </div>

          <p className="th-row-count">
            Showing {filtered.length} of {transactions.length} transactions
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Icons ── */
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function HomeIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 21V12h6v9" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function HistoryIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.7" />
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BeneficiariesIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke={color} strokeWidth="1.7" />
      <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M16 11c1.657 0 3 1.343 3 3M19 20c0-2.21-1.343-4-3-4" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 6v6c0 4.418 3.582 8 8 9 4.418-1 8-4.582 8-9V6l-8-3z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function PersonIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.7" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
