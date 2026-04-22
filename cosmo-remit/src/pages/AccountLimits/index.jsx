import { useState, useRef } from "react";

// Steps: limits → modal → upload-residence → upload-funds → review → success

export default function AccountLimits({ onNavigate }) {
  const [step, setStep] = useState("limits");
  const [residenceFile, setResidenceFile] = useState(null);
  const [fundsFile, setFundsFile] = useState(null);
  const [dragOverResidence, setDragOverResidence] = useState(false);
  const [dragOverFunds, setDragOverFunds] = useState(false);
  const residenceRef = useRef(null);
  const fundsRef = useRef(null);

  const handleFileDrop = (e, setter, setDrag) => {
    e.preventDefault();
    setDrag(false);
    const file = e.dataTransfer.files[0];
    if (file) setter(file);
  };

  return (
    <div style={s.root}>
      {/* ── Sidebar ── */}
      <aside style={s.sidebar}>
        <div style={s.logo}>Logo</div>
        <nav style={s.nav}>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onNavigate && onNavigate(id)}
              style={{ ...s.navItem, ...(id === "limits" ? s.navActive : {}) }}
            >
              <Icon size={20} color={id === "limits" ? "#fff" : "#555"} />
              <span
                style={{
                  ...s.navLabel,
                  color: id === "limits" ? "#fff" : "#333",
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ── Main ── */}
      <div style={s.main}>
        {/* Topbar — hidden on full-screen steps */}
        {!["upload-residence", "upload-funds", "review", "success"].includes(
          step,
        ) && (
          <header style={s.topbar}>
            <div style={{ flex: 1 }} />
            <div style={s.userArea}>
              <div style={s.avatar}>
                <span style={s.avatarText}>KA</span>
              </div>
              <span style={s.userName}>Kabir Akinola</span>
              <ChevronDown size={16} color="#555" />
              <button style={s.bellBtn}>
                <BellIcon size={20} color="#333" />
              </button>
            </div>
          </header>
        )}

        {/* ── STEP 1: Account Limits ── */}
        {step === "limits" && (
          <div style={s.content}>
            <h1 style={s.pageTitle}>Account limits</h1>
            <h2 style={s.sectionTitle}>Current limits</h2>
            <div style={s.limitsCard}>
              <div style={s.limitsLeft}>
                <div style={s.limitItem}>
                  <div style={s.limitLabel}>Daily limit</div>
                  <div style={s.limitValue}>20,000 UK</div>
                </div>
                <div style={s.limitItem}>
                  <div style={s.limitLabel}>Yearly limit</div>
                  <div style={s.limitValue}>1,000,000 UK</div>
                </div>
              </div>
              <button
                style={s.increaseBtn}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#c53030")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#E53E3E")
                }
                onClick={() => setStep("modal")}
              >
                Increase Limits
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Modal ── */}
        {step === "modal" && (
          <div style={s.content}>
            <h1 style={s.pageTitle}>Account limits</h1>
            <h2 style={s.sectionTitle}>Current limits</h2>
            <div
              style={{ ...s.limitsCard, opacity: 0.35, pointerEvents: "none" }}
            >
              <div style={s.limitsLeft}>
                <div style={s.limitItem}>
                  <div style={s.limitLabel}>Daily limit</div>
                  <div style={s.limitValue}>20,000 UK</div>
                </div>
                <div style={s.limitItem}>
                  <div style={s.limitLabel}>Yearly limit</div>
                  <div style={s.limitValue}>1,000,000 UK</div>
                </div>
              </div>
              <button style={{ ...s.increaseBtn, opacity: 0.4 }}>
                Increase Limits
              </button>
            </div>

            {/* Modal */}
            <div style={s.modalBackdrop} onClick={() => setStep("limits")}>
              <div style={s.modal} onClick={(e) => e.stopPropagation()}>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Reason for request</label>
                  <div style={s.selectWrap}>
                    <select defaultValue="" style={s.select}>
                      <option value="">-Select-</option>
                      <option>Business needs</option>
                      <option>Personal reasons</option>
                      <option>Investment</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown size={16} color="#555" style={s.selectIcon} />
                  </div>
                </div>
                <div style={s.formGroup}>
                  <label style={s.formLabel}>Enter limit</label>
                  <input type="number" style={s.input} placeholder="" />
                </div>
                <button
                  style={s.proceedBtn}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#c53030")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#E53E3E")
                  }
                  onClick={() => setStep("upload-residence")}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── STEP 3: Upload proof of residence ── */}
        {step === "upload-residence" && (
          <div style={s.uploadPage}>
            <button style={s.backBtn} onClick={() => setStep("modal")}>
              <ArrowLeft size={22} color="#111" />
            </button>
            <h1 style={s.uploadTitle}>Upload proof of residence</h1>
            <p style={s.uploadSubtitle}>
              You are required to upload a proof of residence to proceed
            </p>
            <div
              style={{
                ...s.dropZone,
                borderColor: dragOverResidence ? "#E53E3E" : "#ccc",
                background: dragOverResidence ? "#fff5f5" : "#fff",
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverResidence(true);
              }}
              onDragLeave={() => setDragOverResidence(false)}
              onDrop={(e) =>
                handleFileDrop(e, setResidenceFile, setDragOverResidence)
              }
              onClick={() => residenceRef.current.click()}
            >
              <input
                ref={residenceRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setResidenceFile(e.target.files[0])}
              />
              <UploadIcon size={36} color="#E53E3E" />
              {residenceFile ? (
                <p style={s.uploadedName}>{residenceFile.name}</p>
              ) : (
                <>
                  <p style={s.dropText}>
                    <span style={s.clickUpload}>Click to Upload</span> or drag
                    and drop
                  </p>
                  <p style={s.dropHint}>(Max. File size: 25 MB)</p>
                </>
              )}
            </div>
            <button
              style={{
                ...s.nextBtn,
                background: "#e0e0e0",
                color: "#bbb",
                cursor: "pointer",
              }}
              onClick={() => setStep("upload-funds")}
            >
              Next
            </button>
          </div>
        )}

        {/* ── STEP 4: Upload proof of funds ── */}
        {step === "upload-funds" && (
          <div style={s.uploadPage}>
            <button
              style={s.backBtn}
              onClick={() => setStep("upload-residence")}
            >
              <ArrowLeft size={22} color="#111" />
            </button>
            <h1 style={s.uploadTitle}>Upload proof of funds</h1>
            <p style={s.uploadSubtitle}>
              You are required to provide a proof of the source of your funds
              {"\n"}
              for security purposes. Upload an appointment letter or bank
              statement
            </p>
            <div
              style={{
                ...s.dropZone,
                borderColor: dragOverFunds ? "#E53E3E" : "#ccc",
                background: dragOverFunds ? "#fff5f5" : "#fff",
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOverFunds(true);
              }}
              onDragLeave={() => setDragOverFunds(false)}
              onDrop={(e) => handleFileDrop(e, setFundsFile, setDragOverFunds)}
              onClick={() => fundsRef.current.click()}
            >
              <input
                ref={fundsRef}
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setFundsFile(e.target.files[0])}
              />
              <UploadIcon size={36} color="#E53E3E" />
              {fundsFile ? (
                <p style={s.uploadedName}>{fundsFile.name}</p>
              ) : (
                <>
                  <p style={s.dropText}>
                    <span style={s.clickUpload}>Click to Upload</span> or drag
                    and drop
                  </p>
                  <p style={s.dropHint}>(Max. File size: 25 MB)</p>
                </>
              )}
            </div>
            <button
              style={{
                ...s.nextBtn,
                background: "#E53E3E",
                color: "#fff",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#c53030")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#E53E3E")
              }
              onClick={() => setStep("review")}
            >
              Next
            </button>
          </div>
        )}

        {/* ── STEP 5: Under Review ── */}
        {step === "review" && (
          <div style={s.statusPage}>
            <button
              style={s.goHomeBtn}
              onClick={() => {
                setStep("limits");
                onNavigate && onNavigate("home");
              }}
            >
              <ArrowLeft size={16} color="#E53E3E" />
              <span style={{ color: "#E53E3E", fontSize: 14, fontWeight: 500 }}>
                Go home
              </span>
            </button>
            <div style={s.statusContent}>
              <div style={{ ...s.statusIconCircle, background: "#F5C518" }}>
                <ReviewIcon size={40} color="#fff" />
              </div>
              <h1 style={s.statusTitle}>Limit increase under review</h1>
              <p style={s.statusText}>
                Your request to upgrade account limits is currently{"\n"}
                being processed. Please check back later
              </p>
              {/* Demo button to see success state */}
              <button
                style={{
                  ...s.doneBtn,
                  background: "#F5C518",
                  marginTop: 32,
                  fontSize: 13,
                }}
                onClick={() => setStep("success")}
              >
                Request Approved →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 6: Success ── */}
        {step === "success" && (
          <div style={s.statusPage}>
            <div style={s.statusContent}>
              <div style={s.successBadge}>
                <CheckIcon size={36} color="#fff" />
              </div>
              <h1 style={s.statusTitle}>Limit increased successfully</h1>
              <p style={s.statusText}>Your account limit has been increased!</p>
              <button
                style={s.doneBtn}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#c53030")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#E53E3E")
                }
                onClick={() => {
                  setStep("limits");
                  onNavigate && onNavigate("home");
                }}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Nav ────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "history", label: "Transaction History", icon: HistoryIcon },
  { id: "beneficiaries", label: "Beneficiaries", icon: BeneficiariesIcon },
  { id: "limits", label: "Account limits", icon: ShieldIcon },
  { id: "profile", label: "Profile", icon: PersonIcon },
];

/* ─── Styles ─────────────────────────────────────────────────── */
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
  bellBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    marginLeft: 4,
    padding: 4,
    display: "flex",
    alignItems: "center",
  },

  /* Limits page */
  content: { padding: "32px 40px", position: "relative", flex: 1 },
  pageTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 24px",
    letterSpacing: "-0.3px",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 500,
    margin: "0 0 16px",
    color: "#333",
  },
  limitsCard: {
    background: "#fff",
    borderRadius: 14,
    padding: "28px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    maxWidth: 860,
  },
  limitsLeft: { display: "flex", gap: 60 },
  limitItem: { display: "flex", flexDirection: "column", gap: 6 },
  limitLabel: { fontSize: 13, color: "#888" },
  limitValue: { fontSize: 18, fontWeight: 700, color: "#111" },
  increaseBtn: {
    background: "#E53E3E",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 28px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.15s",
    whiteSpace: "nowrap",
  },

  /* Modal */
  modalBackdrop: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  modal: {
    background: "#fff",
    borderRadius: 16,
    padding: "40px 40px 36px",
    width: 560,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
  },
  formGroup: { display: "flex", flexDirection: "column", gap: 8 },
  formLabel: { fontSize: 15, fontWeight: 500, color: "#111" },
  selectWrap: { position: "relative" },
  select: {
    width: "100%",
    padding: "14px 16px",
    fontSize: 14,
    border: "1px solid #e5e5e5",
    borderRadius: 8,
    background: "#f7f7f7",
    appearance: "none",
    outline: "none",
    cursor: "pointer",
    color: "#555",
  },
  selectIcon: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
  },
  input: {
    width: "100%",
    padding: "14px 16px",
    fontSize: 14,
    border: "1px solid #e5e5e5",
    borderRadius: 8,
    background: "#f7f7f7",
    outline: "none",
    color: "#111",
    boxSizing: "border-box",
  },
  proceedBtn: {
    width: "100%",
    padding: "16px",
    background: "#E53E3E",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 8,
    transition: "background 0.15s",
  },

  /* Upload pages */
  uploadPage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 28px",
    background: "#fff",
    minHeight: "100vh",
    position: "relative",
  },
  backBtn: {
    position: "absolute",
    top: 36,
    left: 28,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 4,
    display: "flex",
    alignItems: "center",
  },
  uploadTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 10px",
    textAlign: "center",
    letterSpacing: "-0.3px",
  },
  uploadSubtitle: {
    fontSize: 14,
    color: "#666",
    margin: "0 0 36px",
    textAlign: "center",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
  },
  dropZone: {
    width: "100%",
    maxWidth: 380,
    border: "2px dashed #ccc",
    borderRadius: 12,
    padding: "36px 24px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    transition: "border-color 0.2s, background 0.2s",
    marginBottom: 48,
  },
  clickUpload: { color: "#E53E3E", fontWeight: 500 },
  dropText: { fontSize: 14, color: "#333", margin: 0, textAlign: "center" },
  dropHint: { fontSize: 12, color: "#999", margin: 0 },
  uploadedName: {
    fontSize: 13,
    color: "#22a559",
    fontWeight: 500,
    margin: 0,
    textAlign: "center",
  },
  nextBtn: {
    width: "100%",
    maxWidth: 280,
    padding: "16px",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    transition: "background 0.15s",
  },

  /* Status pages */
  statusPage: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    minHeight: "100vh",
    position: "relative",
  },
  goHomeBtn: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "28px 32px",
    alignSelf: "flex-start",
  },
  statusContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px 60px",
    textAlign: "center",
  },
  statusIconCircle: {
    width: 90,
    height: 90,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  statusTitle: {
    fontSize: 22,
    fontWeight: 700,
    margin: "0 0 12px",
    letterSpacing: "-0.3px",
  },
  statusText: {
    fontSize: 14,
    color: "#666",
    margin: "0 0 8px",
    lineHeight: 1.7,
    whiteSpace: "pre-line",
  },

  /* Success badge */
  successBadge: {
    width: 90,
    height: 90,
    background: "#22a559",
    clipPath:
      "polygon(50% 0%, 61% 10%, 75% 5%, 80% 18%, 95% 20%, 93% 35%, 100% 47%, 91% 57%, 95% 72%, 81% 76%, 78% 91%, 63% 90%, 50% 100%, 37% 90%, 22% 91%, 19% 76%, 5% 72%, 9% 57%, 0% 47%, 7% 35%, 5% 20%, 20% 18%, 25% 5%, 39% 10%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 28,
  },
  doneBtn: {
    padding: "14px 60px",
    background: "#E53E3E",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 24,
    transition: "background 0.15s",
  },
};

/* ─── Icons ──────────────────────────────────────────────────── */
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
function BellIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 17H9v1a3 3 0 006 0v-1z" fill={color} />
      <path
        d="M18 13V10a6 6 0 10-12 0v3l-2 4h16l-2-4z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChevronDown({ size = 16, color = "#555" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ArrowLeft({ size = 22, color = "#111" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M19 12H5M5 12l7 7M5 12l7-7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UploadIcon({ size = 36, color = "#E53E3E" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v6h6"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18v-6M9 15l3-3 3 3"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ReviewIcon({ size = 40, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <path
        d="M12 7v5l3 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CheckIcon({ size = 36, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 13l4 4L19 7"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
