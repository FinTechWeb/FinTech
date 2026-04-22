const KABIR_AVATAR =
  "data:image/png;base64,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";

export default function CosmoRemitProfile({ onNavigate }) {
  const active = "profile";

  return (
    <div style={s.root}>
      <aside style={s.sidebar}>
        <div style={s.logo}>Logo</div>
        <nav style={s.nav}>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              style={{ ...s.navItem, ...(id === active ? s.navActive : {}) }}
            >
              <Icon size={20} color={id === active ? "#fff" : "#555"} />
              <span
                style={{
                  ...s.navLabel,
                  color: id === active ? "#fff" : "#333",
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <div style={s.main}>
        <header style={s.topbar}>
          <div style={{ flex: 1 }} />
          <div style={s.userArea}>
            <img src={KABIR_AVATAR} alt="Kabir Akinola" style={s.avatarImg} />
            <span style={s.userName}>Kabir Akinola</span>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="#333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={s.bellWrap}>
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"
                  stroke="#222"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21a2 2 0 01-3.46 0"
                  stroke="#222"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={s.bellDot} />
            </div>
          </div>
        </header>

        <div style={s.content}>
          <div style={s.card}>
            <div style={s.profileHeader}>
              <div style={s.profileLeft}>
                <div style={s.bigAvatar}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="1.3"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path
                      strokeLinecap="round"
                      d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                    />
                  </svg>
                </div>
                <span style={s.profileName}>Kabir Akinola</span>
              </div>
              <button style={s.editBtn}>Edit profile</button>
            </div>

            <div style={s.divider} />

            <div style={s.sectionTitle}>Personal details</div>
            <div style={s.grid}>
              {[
                ["First name", "Kabir"],
                ["Last name", "Akinola"],
                ["Country of residence", "United Kingdom"],
                ["Email address", "Kabirakinola@gmail.com"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={s.fieldLabel}>{label}</div>
                  <div style={s.fieldValue}>{value}</div>
                </div>
              ))}
            </div>

            <div style={s.divider} />

            <div style={s.sectionTitle}>Transaction limits</div>
            <div style={s.limitsRow}>
              {[
                ["Daily limit", "20,000 UK"],
                ["Yearly limit", "1,000,000 UK"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={s.fieldLabel}>{label}</div>
                  <div style={s.fieldValue}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "history", label: "Transaction History", icon: HistoryIcon },
  { id: "beneficiaries", label: "Beneficiaries", icon: BeneficiariesIcon },
  { id: "limits", label: "Account limits", icon: ShieldIcon },
  { id: "profile", label: "Profile", icon: PersonIcon },
];

const s = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
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
    width: "100%",
  },
  navActive: { background: "#E53E3E" },
  navLabel: { fontSize: 13.5, fontWeight: 400 },
  main: { flex: 1, display: "flex", flexDirection: "column" },
  topbar: {
    display: "flex",
    alignItems: "center",
    padding: "12px 28px",
    background: "#fff",
    borderBottom: "1px solid #eee",
    minHeight: 60,
  },
  userArea: { display: "flex", alignItems: "center", gap: 10 },
  avatarImg: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    flexShrink: 0,
  },
  userName: {
    fontSize: 14,
    fontWeight: 500,
    color: "#111",
    whiteSpace: "nowrap",
  },
  bellWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginLeft: 4,
  },
  bellDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#E53E3E",
    border: "1.5px solid #fff",
  },
  content: { flex: 1, padding: "28px 32px" },
  card: {
    background: "#fff",
    borderRadius: 12,
    padding: "30px 34px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    maxWidth: 820,
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  profileLeft: { display: "flex", alignItems: "center", gap: 16 },
  bigAvatar: {
    width: 62,
    height: 62,
    borderRadius: "50%",
    background: "#c4c4c8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  profileName: { fontSize: 20, fontWeight: 600, color: "#111827" },
  editBtn: {
    background: "#E53E3E",
    color: "#fff",
    border: "none",
    padding: "8px 18px",
    borderRadius: 6,
    fontSize: 13.5,
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
  },
  divider: { border: "none", borderTop: "1px solid #e5e7eb", margin: "22px 0" },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#111827",
    marginBottom: 18,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    rowGap: 22,
    columnGap: 40,
  },
  limitsRow: { display: "flex", gap: 72 },
  fieldLabel: { fontSize: 12, color: "#9ca3af", marginBottom: 4 },
  fieldValue: { fontSize: 14.5, color: "#111827" },
};

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
