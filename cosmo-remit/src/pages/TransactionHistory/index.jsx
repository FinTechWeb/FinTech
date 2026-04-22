import { useState, useMemo } from "react";

const transactions = [
  {
    id: 1,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 2,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 3,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 4,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 5,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 6,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
  {
    id: 7,
    ref: "6764567892902",
    amount: "US 200",
    rate: "1,700",
    channel: "Bank transfer",
    recipient: "Muhammed Muktar",
    status: "Successful",
  },
];

const STATUS_FILTERS = ["All", "Successful", "Pending", "Failed"];
const statusColor = {
  Successful: "#3D9A50",
  Pending: "#d97706",
  Failed: "#dc2626",
};
const COLS = "2fr 1.2fr 0.8fr 1.4fr 1.8fr 1.2fr";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "history", label: "Transaction History", Icon: HistoryIcon },
  { id: "beneficiaries", label: "Beneficiaries", Icon: BeneficiariesIcon },
  { id: "limits", label: "Account limits", Icon: ShieldIcon },
  { id: "profile", label: "Profile", Icon: PersonIcon },
];

export default function TransactionHistory({ onNavigate }) {
  const [search, setSearch] = useState("");
  const [filterIndex, setFilterIndex] = useState(0);

  const activeFilter = STATUS_FILTERS[filterIndex];

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return transactions.filter((t) => {
      const matchSearch =
        !q || t.ref.includes(q) || t.recipient.toLowerCase().includes(q);
      const matchFilter = activeFilter === "All" || t.status === activeFilter;
      return matchSearch && matchFilter;
    });
  }, [search, filterIndex]);

  return (
    <div style={s.root}>
      {/* ── Sidebar ── */}
      <aside style={s.sidebar}>
        <div style={s.logo}>Logo</div>
        <nav style={s.nav}>
          {NAV_ITEMS.map(({ id, label, Icon }) => {
            const active = id === "history";
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                style={{ ...s.navItem, ...(active ? s.navActive : {}) }}
              >
                <Icon size={20} color={active ? "#fff" : "#555"} />
                <span
                  style={{ ...s.navLabel, color: active ? "#fff" : "#333" }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ── Main ── */}
      <div style={s.main}>
        {/* Topbar */}
        <header style={s.topbar}>
          <div style={{ flex: 1 }} />
          <div style={s.userArea}>
            <div style={s.avatar}>
              <span style={s.avatarText}>KA</span>
            </div>
            <span style={s.userName}>Kabir Akinola</span>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="#555"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </header>

        {/* Content */}
        <div style={s.content}>
          <h1 style={s.pageTitle}>Transactions</h1>

          {/* Toolbar */}
          <div style={s.toolbar}>
            <div style={s.searchWrap}>
              <SearchIcon />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reference or recipient…"
                style={s.searchInput}
              />
            </div>
            <button style={s.toolbarBtn}>
              <CalendarIcon /> Select date
            </button>
            <button
              onClick={() =>
                setFilterIndex((i) => (i + 1) % STATUS_FILTERS.length)
              }
              style={{
                ...s.toolbarBtn,
                ...(filterIndex !== 0 ? s.toolbarBtnActive : {}),
              }}
            >
              <FilterIcon /> {activeFilter === "All" ? "Filter" : activeFilter}
            </button>
          </div>

          {/* Column headers */}
          <div style={s.colHeaders}>
            {[
              "Refernce",
              "Amount Sent",
              "Rate",
              "Channel",
              "Recipient",
              "Status",
            ].map((h) => (
              <span key={h}>{h}</span>
            ))}
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.length === 0 ? (
              <div style={s.emptyState}>No transactions match your search.</div>
            ) : (
              filtered.map((t) => (
                <div
                  key={t.id}
                  style={s.row}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#f1f5f9")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#f9fafb")
                  }
                >
                  <span>{t.ref}</span>
                  <span>{t.amount}</span>
                  <span>{t.rate}</span>
                  <span>{t.channel}</span>
                  <span>{t.recipient}</span>
                  <span
                    style={{ color: statusColor[t.status], fontWeight: 500 }}
                  >
                    {t.status}
                  </span>
                </div>
              ))
            )}
          </div>

          <p style={s.rowCount}>
            Showing {filtered.length} of {transactions.length} transactions
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Styles ─────────────────────────────────────────────────────────────────── */
const s = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'DM Sans','Helvetica Neue',sans-serif",
    background: "#f5f5f5",
    color: "#222",
    fontSize: 14,
  },
  sidebar: {
    width: 200,
    minHeight: "100vh",
    background: "#fff",
    borderRight: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
    flexShrink: 0,
  },
  logo: {
    fontWeight: 700,
    fontSize: 22,
    padding: "0 20px 28px",
    letterSpacing: "-0.5px",
  },
  nav: { display: "flex", flexDirection: "column", gap: 2 },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "11px 20px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    transition: "background 0.15s",
  },
  navActive: { background: "#E53E3E" },
  navLabel: { fontSize: 13.5, fontWeight: 400 },
  main: { flex: 1, display: "flex", flexDirection: "column" },
  topbar: {
    display: "flex",
    alignItems: "center",
    padding: "14px 28px",
    background: "#fff",
    borderBottom: "1px solid #eee",
  },
  userArea: { display: "flex", alignItems: "center", gap: 8 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#c5a87a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 12, fontWeight: 600, color: "#fff" },
  userName: { fontSize: 14, fontWeight: 500 },
  content: { padding: "28px 32px", flex: 1 },
  pageTitle: { fontSize: 20, fontWeight: 600, marginBottom: 20 },
  toolbar: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" },
  searchWrap: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: 1,
    minWidth: 160,
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: "0 10px",
    background: "#fff",
  },
  searchInput: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: 13,
    color: "#111",
    width: "100%",
    padding: "7px 0",
  },
  toolbarBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "7px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    fontSize: 13,
    color: "#6b7280",
    background: "#fff",
    cursor: "pointer",
  },
  toolbarBtnActive: {
    background: "#eff6ff",
    border: "1px solid #bfdbfe",
    color: "#1d4ed8",
    fontWeight: 500,
  },
  colHeaders: {
    display: "grid",
    gridTemplateColumns: COLS,
    padding: "0 20px 10px",
    fontSize: 14,
    color: "#9ca3af",
  },
  row: {
    display: "grid",
    gridTemplateColumns: COLS,
    alignItems: "center",
    background: "#f9fafb",
    borderRadius: 12,
    padding: "16px 20px",
    fontSize: 15,
    color: "#111",
    cursor: "pointer",
    transition: "background 0.15s",
  },
  emptyState: {
    background: "#f9fafb",
    borderRadius: 12,
    padding: "32px 20px",
    textAlign: "center",
    color: "#9ca3af",
    fontSize: 13,
  },
  rowCount: { fontSize: 12, color: "#9ca3af", marginTop: 12 },
};

/* ── Icons ──────────────────────────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1.5"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function HomeIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9 21V12h6v9"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HistoryIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.7" />
      <path
        d="M12 7v5l3 3"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BeneficiariesIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke={color} strokeWidth="1.7" />
      <path
        d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 11c1.657 0 3 1.343 3 3M19 20c0-2.21-1.343-4-3-4"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
function ShieldIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L4 6v6c0 4.418 3.582 8 8 9 4.418-1 8-4.582 8-9V6l-8-3z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PersonIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.7" />
      <path
        d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
