import { useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "history", label: "Transaction History", icon: HistoryIcon },
  { id: "beneficiaries", label: "Beneficiaries", icon: BeneficiariesIcon },
  { id: "limits", label: "Account limits", icon: ShieldIcon },
  { id: "profile", label: "Profile", icon: PersonIcon },
];

const RECENT_TRANSFERS = [
  { id: 1, name: "Elizabeth Moses", amount: "NGN 650,000", status: "Successful", initials: "EM", color: "#e8a87c" },
  { id: 2, name: "Aisha Ibrahim", amount: "NGN 850,000", status: "Successful", initials: "AI", color: "#7cb8e8" },
  { id: 3, name: "Murtala Muktar", amount: "NGN 850,000", status: "Successful", initials: "MM", color: "#a87ce8" },
];

const AVATAR_URL = "https://randomuser.me/api/portraits/men/32.jpg";

export default function CosmoRemit({ onNavigate }) {
  const [activeNav, setActiveNav] = useState("home");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showTransferDetails, setShowTransferDetails] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showNotice, setShowNotice] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [reason, setReason] = useState("");
  const [source, setSource] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [pin, setPin] = useState(["", "", "", ""]);

  const [showLimitsModal, setShowLimitsModal] = useState(false);
  const [limitReason, setLimitReason] = useState("");
  const [limitAmount, setLimitAmount] = useState("");

  const handleSend = () => setShowConfirm(true);
  const handleNo = () => setShowConfirm(false);
  const handleYes = () => { setShowConfirm(false); setShowTransferDetails(true); };
  const handleSendNow = () => { setShowTransferDetails(false); setShowReview(true); };
  const handleEdit = () => { setShowReview(false); setShowTransferDetails(true); };
  const handleMakePayment = () => { setShowReview(false); setShowPin(true); };
  const handlePinNext = () => { setShowPin(false); setShowNotice(true); };
  const handleNoticeDone = () => { setShowNotice(false); setShowSuccess(true); };
  const handleSuccessClose = () => {
    setShowSuccess(false);
    setReason(""); setSource(""); setAgreed(false); setPin(["", "", "", ""]);
  };
  const handleClickHere = () => { setShowSuccess(false); setShowReceipt(true); };
  const handleReceiptHome = () => { setShowReceipt(false); };

  const handlePinInput = (index, value) => {
    if (value.length > 1) return;
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    if (value && index < 3) document.getElementById(`pin-${index + 1}`)?.focus();
  };
  const handlePinKeyDown = (index, e) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) document.getElementById(`pin-${index - 1}`)?.focus();
  };

  /* ── Receipt Page (full screen, replaces main content) ── */
  if (showReceipt) {
    return (
      <div style={styles.root}>
        <aside style={styles.sidebar}>
          <div style={styles.logo}>Logo</div>
          <nav style={styles.nav}>
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
              const active = activeNav === id;
              return (
                <button key={id} onClick={() => { setActiveNav(id); if (id === "limits") setShowLimitsModal(true); }}
                  style={{ ...styles.navItem, ...(active ? styles.navItemActive : {}) }}>
                  <Icon size={20} color={active ? "#fff" : "#555"} />
                  <span style={{ ...styles.navLabel, color: active ? "#fff" : "#333" }}>{label}</span>
                </button>
              );
            })}
          </nav>
        </aside>
        <div style={styles.main}>
          <header style={styles.topbar}>
            <div style={{ flex: 1 }} />
            <div style={styles.userArea}>
              <img src={AVATAR_URL} alt="avatar" style={styles.avatarImg} />
              <span style={styles.userName}>Kabir Akinola</span>
              <ChevronDown size={16} color="#555" />
              <button style={styles.bellBtn}><BellIcon size={20} color="#333" /></button>
            </div>
          </header>
          <div style={styles.receiptPage}>
            <div style={styles.receiptContainer}>
              {/* Header */}
              <div style={styles.receiptHeader}>
                <button style={styles.goHomeBtn} onClick={handleReceiptHome}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={styles.goHomeText}>Go home</span>
                </button>
                <div style={styles.receiptTitleBlock}>
                  <h2 style={styles.receiptTitle}>500 UK Sent</h2>
                  <p style={styles.receiptSubtitle}>Transfer to Musa Ibrahim</p>
                </div>
              </div>

              {/* Transaction details */}
              <div style={styles.receiptTable}>
                {[
                  ["Reference No", "89578833456593334"],
                  ["Status", "success"],
                  ["Transaction date", "24th August, 2024"],
                  ["Recipient", "Musa Ibrahim"],
                  ["Amount sent", "500 UK"],
                  ["Completed on", "24th August, 2024. 9:00am"],
                  ["Fee", "0"],
                  ["Payment method", "Bank transfer"],
                ].map(([label, value]) => (
                  <div key={label} style={styles.receiptRow}>
                    <span style={styles.receiptLabel}>{label}</span>
                    {value === "success"
                      ? <span style={styles.successPill}>Success</span>
                      : <span style={styles.receiptValue}>{value}</span>
                    }
                  </div>
                ))}
              </div>

              {/* Receiver details */}
              <h3 style={styles.receiverSectionTitle}>Receiver details</h3>
              <div style={styles.receiptTable}>
                {[
                  ["Amount received", "NGN 850,000"],
                  ["Bank name", "United Bank For Africa"],
                  ["Account number", "2345236xxx"],
                ].map(([label, value]) => (
                  <div key={label} style={styles.receiptRow}>
                    <span style={styles.receiptLabel}>{label}</span>
                    <span style={styles.receiptValue}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div style={styles.receiptBtns}>
                <button style={styles.downloadBtn}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e8e8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}>
                  Download PDF
                </button>
                <button style={styles.shareBtn}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}>
                  Share PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logo}>Logo</div>
        <nav style={styles.nav}>
          {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const active = activeNav === id;
            return (
              <button key={id}
                onClick={() => { setActiveNav(id); if (id === "limits") setShowLimitsModal(true); if (onNavigate) onNavigate(id); }}
                style={{ ...styles.navItem, ...(active ? styles.navItemActive : {}) }}>
                <Icon size={20} color={active ? "#fff" : "#555"} />
                <span style={{ ...styles.navLabel, color: active ? "#fff" : "#333" }}>{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main */}
      <div style={styles.main}>
        <header style={styles.topbar}>
          <div style={{ flex: 1 }} />
          <div style={styles.userArea}>
            <img src={AVATAR_URL} alt="avatar" style={styles.avatarImg} />
            <span style={styles.userName}>Kabir Akinola</span>
            <ChevronDown size={16} color="#555" />
            <button style={styles.bellBtn}><BellIcon size={20} color="#333" /></button>
          </div>
        </header>

        <div style={styles.content}>
          {/* Left column */}
          <div style={styles.leftCol}>
            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>Welcome</h2>
              <div style={styles.statsRow}>
                <div style={styles.statCard}>
                  <div style={styles.statIconWrap}><TransferIcon size={18} color="#E53E3E" /></div>
                  <div style={styles.statNum}>20</div>
                  <div style={styles.statLabel}>Transfers made</div>
                </div>
                <div style={styles.statCard}>
                  <div style={styles.statIconWrap}><TransferIcon size={18} color="#E53E3E" /></div>
                  <div style={styles.statNum}>5</div>
                  <div style={styles.statLabel}>Beneficiaries</div>
                </div>
              </div>
            </section>

            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>Recent transfers</h2>
              <div style={styles.transferList}>
                {RECENT_TRANSFERS.map((t) => (
                  <div key={t.id} style={styles.transferRow}>
                    <div style={{ ...styles.transferAvatar, background: t.color }}>
                      <span style={styles.transferInitials}>{t.initials}</span>
                    </div>
                    <span style={styles.transferName}>{t.name}</span>
                    <div style={styles.flagWrap}><Flag code="ng" size={18} /></div>
                    <span style={styles.transferAmount}>{t.amount}</span>
                    <span style={styles.statusBadge}>{t.status}</span>
                    <button style={styles.viewBtn}>View</button>
                  </div>
                ))}
              </div>
            </section>

            <section style={styles.card}>
              <h2 style={styles.sectionTitle}>Current limits</h2>
              <div style={styles.limitsRow}>
                <div>
                  <div style={styles.limitLabel}>Daily limit</div>
                  <div style={styles.limitValue}>20,000 UK</div>
                </div>
                <div>
                  <div style={styles.limitLabel}>Yearly limit</div>
                  <div style={styles.limitValue}>1,000,000 UK</div>
                </div>
              </div>
              <p style={styles.limitNote}>
                If you want higher limits, temporarily or permanently,{" "}
                <a href="#" style={styles.linkRed}>click here</a>
              </p>
            </section>
          </div>

          {/* Right column */}
          <div style={styles.rightCol}>
            <section style={styles.transferCard}>
              <h2 style={styles.transferTitle}>Make a Transfer</h2>
              <div style={styles.fieldGroup}>
                <span style={styles.fieldLabel}>You send</span>
                <div style={styles.fieldRow}>
                  <span style={styles.fieldAmount}>500</span>
                  <div style={styles.currencyChip}>
                    <Flag code="gb" size={22} />
                    <span style={styles.chipText}>UK</span>
                    <ChevronDown size={14} color="#555" />
                  </div>
                </div>
              </div>
              <div style={styles.fieldGroup}>
                <span style={styles.fieldLabel}>Payment method</span>
                <div style={styles.fieldRow}>
                  <span style={styles.fieldValue}>Bank transfer</span>
                  <ChevronDown size={14} color="#555" />
                </div>
              </div>
              <div style={styles.emptyBox} />
              <div style={styles.fieldGroup}>
                <span style={styles.fieldLabel}>Recipient gets</span>
                <div style={styles.fieldRow}>
                  <span style={styles.fieldAmount}>850,000</span>
                  <div style={styles.currencyChip}>
                    <Flag code="ng" size={22} />
                    <span style={styles.chipText}>NGN</span>
                    <ChevronDown size={14} color="#555" />
                  </div>
                </div>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.redDot} />
                <span style={styles.infoLabel}>Rate</span>
                <span style={styles.infoValue}>1 UK = 1,700 NGN</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.redDot} />
                <span style={styles.infoLabel}>Charges</span>
                <span style={styles.infoValue}>0</span>
              </div>
              <button style={styles.sendBtn}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
                onClick={handleSend}>
                Send &nbsp;<SendArrowIcon size={16} color="#fff" />
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* ── Step 1: Confirmation Modal ── */}
      {showConfirm && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <p style={styles.modalMessage}>Confirm transfer of NGN 850,000 to recipient?</p>
            <div style={styles.modalBtns}>
              <button style={styles.btnNo}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e0e0e0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                onClick={handleNo}>No</button>
              <button style={styles.btnYes}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
                onClick={handleYes}>Yes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 2: Transfer Details Modal ── */}
      {showTransferDetails && (
        <div style={styles.overlay}>
          <div style={styles.detailsModal}>
            <div style={styles.detailsSection}>
              <p style={styles.detailsLabel}>Reason for transfer</p>
              <div style={styles.selectWrap}>
                <select value={reason} onChange={(e) => setReason(e.target.value)} style={styles.select}>
                  <option value="">-Select-</option>
                  <option value="family_support">Family Support</option>
                  <option value="business">Business Payment</option>
                  <option value="education">Education</option>
                  <option value="medical">Medical</option>
                  <option value="investment">Investment</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown size={18} color="#555" />
              </div>
            </div>
            <div style={styles.detailsSection}>
              <p style={styles.detailsLabel}>Select source of funds</p>
              <div style={styles.selectWrap}>
                <select value={source} onChange={(e) => setSource(e.target.value)} style={styles.select}>
                  <option value="">-Select-</option>
                  <option value="salary">Salary</option>
                  <option value="savings">Savings</option>
                  <option value="business">Business Income</option>
                  <option value="investment">Investment Returns</option>
                  <option value="gift">Gift</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown size={18} color="#555" />
              </div>
            </div>
            <label style={styles.checkboxRow}>
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} style={styles.checkbox} />
              <span style={styles.checkboxText}>
                I agree to the{" "}
                <a href="#" style={styles.linkRed}>terms &amp; conditions</a>{" "}and{" "}
                <a href="#" style={styles.linkRed}>privacy policy</a>
              </span>
            </label>
            <button style={styles.sendNowBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
              onClick={handleSendNow}>
              Send now
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Review Modal ── */}
      {showReview && (
        <div style={styles.overlay}>
          <div style={styles.reviewModal}>
            <div style={styles.reviewHeader}>
              <button style={styles.backBtn} onClick={handleEdit}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <h2 style={styles.reviewTitle}>Review</h2>
              <div style={{ width: 28 }} />
            </div>
            <div style={styles.reviewScroll}>
              <div style={styles.reviewTable}>
                {[
                  ["Reference No", "89578833456593334"],
                  ["Transaction date", "24th August, 2024"],
                  ["Recipient", "Musa Ibrahim"],
                  ["Amount to send", "500 UK"],
                  ["Charges", "0"],
                  ["Payment method", "Bank transfer"],
                ].map(([label, value]) => (
                  <div key={label} style={styles.reviewRow}>
                    <span style={styles.reviewLabel}>{label}</span>
                    <span style={styles.reviewValue}>{value}</span>
                  </div>
                ))}
              </div>
              <p style={styles.receiverTitle}>Receiver details</p>
              <div style={styles.reviewTable}>
                {[
                  ["Account name", "Musa Mamman Ibrahim"],
                  ["Amount to receive", "NGN 850,000"],
                  ["Bank name", "United Bank For Africa"],
                  ["Account number", "2345236657"],
                ].map(([label, value]) => (
                  <div key={label} style={styles.reviewRow}>
                    <span style={styles.reviewLabel}>{label}</span>
                    <span style={styles.reviewValue}>{value}</span>
                  </div>
                ))}
              </div>
              <div style={styles.noticesBox}>
                {[
                  "Transaction will be completed upon payment confirmation in our bank account. Large/first payments may take up to 24 hours. Also, the rate is locked with a transaction, it will not be changed or altered even when the transaction has failed, cancelled or expired",
                  "Confirm that money will be sent from your account. If not, the whole transaction will be reversed.",
                  "Transaction of £4999 or more per month may require additional proof of source of funds (Payslips, bank statement), this does not take account your personal need or objective",
                ].map((text, i) => (
                  <div key={i} style={styles.noticeRow}>
                    <div style={styles.noticeCheck}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={styles.noticeText}>{text}</p>
                  </div>
                ))}
              </div>
              <div style={styles.reviewBtns}>
                <button style={styles.editBtn}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e8e8e8")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#f0f0f0")}
                  onClick={handleEdit}>Edit</button>
                <button style={styles.makePaymentBtn}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
                  onClick={handleMakePayment}>Make payment</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Step 4: PIN Modal ── */}
      {showPin && (
        <div style={styles.overlay}>
          <div style={styles.pinModal}>
            <p style={styles.pinTitle}>Please enter your pin</p>
            <div style={styles.pinBoxes}>
              {pin.map((val, i) => (
                <input key={i} id={`pin-${i}`} type="password" maxLength={1} value={val}
                  onChange={(e) => handlePinInput(i, e.target.value)}
                  onKeyDown={(e) => handlePinKeyDown(i, e)}
                  style={styles.pinBox} />
              ))}
            </div>
            <button style={styles.pinNextBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
              onClick={handlePinNext}>Next</button>
          </div>
        </div>
      )}

      {/* ── Step 5: Important Notice Modal ── */}
      {showNotice && (
        <div style={styles.overlay}>
          <div style={styles.noticeModal}>
            <h2 style={styles.noticeBigTitle}>Important Notice!</h2>
            <p style={styles.noticeBody}>
              To complete transfer, payment must come from sender's account only.
              Please transfer funds directly to your Frica Xchange unique bank account as shown below
            </p>
            <p style={styles.noticeBody}>
              Your transaction reference number is{" "}
              <span style={styles.noticeRed}>888384455322223</span>
            </p>
            <div style={styles.noticeDetails}>
              <p style={styles.noticeDetailLine}><strong>Account name:</strong>{" "}<span style={styles.noticeRed}>Kabir Akinola</span></p>
              <p style={styles.noticeDetailLine}><strong>Account number:</strong>{" "}<span style={styles.noticeRed}>9867523456</span></p>
            </div>
            <button style={styles.noticeDoneBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b0b0b0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#d0d0d0")}
              onClick={handleNoticeDone}>Done</button>
          </div>
        </div>
      )}

      {/* ── Step 6: Transfer Successful ── */}
      {showSuccess && (
        <div style={styles.overlay}>
          <div style={styles.successModal}>
            <div style={styles.successBadge}>
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 style={styles.successTitle}>Transfer successful</h2>
            <p style={styles.successBody}>Your transfer to Muhammed Ibrahim was successful</p>
            <p style={styles.successBody}>
              <span style={{ ...styles.linkRed, cursor: "pointer" }} onClick={handleClickHere}>Click here</span>{" "}to view transaction details
            </p>
            <button style={styles.successDoneBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
              onClick={handleSuccessClose}>Done</button>
          </div>
        </div>
      )}

      {/* ── Account Limits Modal ── */}
      {showLimitsModal && (
        <div style={styles.overlay}>
          <div style={styles.detailsModal}>
            <div style={styles.detailsSection}>
              <p style={styles.detailsLabel}>Reason for request</p>
              <div style={styles.selectWrap}>
                <select value={limitReason} onChange={(e) => setLimitReason(e.target.value)} style={styles.select}>
                  <option value="">-Select-</option>
                  <option value="personal">Personal use</option>
                  <option value="business">Business</option>
                  <option value="family">Family support</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown size={18} color="#555" />
              </div>
            </div>
            <div style={styles.detailsSection}>
              <p style={styles.detailsLabel}>Enter limit</p>
              <input type="number" value={limitAmount} onChange={(e) => setLimitAmount(e.target.value)} placeholder=""
                style={{ background: "#f4f4f4", border: "1px solid #e5e5e5", borderRadius: 8, padding: "14px 16px", fontSize: 15, width: "100%", boxSizing: "border-box", outline: "none", color: "#222" }} />
            </div>
            <button style={styles.sendNowBtn}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c53030")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#E53E3E")}
              onClick={() => setShowLimitsModal(false)}>Proceed</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Styles ──────────────────────────────────────────────────── */
const styles = {
  root: { display: "flex", height: "100vh", width: "100vw", fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#f5f5f5", fontSize: 14, color: "#222", overflow: "hidden" },
  sidebar: { width: 220, height: "100vh", background: "#fff", borderRight: "1px solid #eee", display: "flex", flexDirection: "column", padding: "24px 0", flexShrink: 0 },
  logo: { fontWeight: 700, fontSize: 22, padding: "0 20px 28px", letterSpacing: "-0.5px" },
  nav: { display: "flex", flexDirection: "column", gap: 2 },
  navItem: { display: "flex", alignItems: "center", gap: 10, padding: "11px 20px", border: "none", background: "transparent", cursor: "pointer", borderRadius: 0, textAlign: "left", transition: "background 0.15s" },
  navItemActive: { background: "#E53E3E" },
  navLabel: { fontSize: 13.5, fontWeight: 400 },
  topbar: { display: "flex", alignItems: "center", padding: "14px 28px", background: "#fff", borderBottom: "1px solid #eee", flexShrink: 0 },
  userArea: { display: "flex", alignItems: "center", gap: 8 },
  avatarImg: { width: 36, height: 36, borderRadius: "50%", objectFit: "cover", display: "block" },
  userName: { fontSize: 14, fontWeight: 500 },
  bellBtn: { background: "none", border: "none", cursor: "pointer", marginLeft: 4, padding: 4, display: "flex", alignItems: "center" },
  main: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" },
  content: { display: "flex", gap: 20, padding: "24px 28px", alignItems: "flex-start", flex: 1, overflowY: "auto" },
  leftCol: { flex: 1, display: "flex", flexDirection: "column", gap: 18 },
  rightCol: { width: 340, flexShrink: 0 },
  card: { background: "#fff", borderRadius: 12, padding: "20px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" },
  sectionTitle: { fontSize: 16, fontWeight: 600, margin: "0 0 16px" },
  statsRow: { display: "flex", gap: 14 },
  statCard: { flex: 1, border: "1px solid #eee", borderRadius: 10, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 6 },
  statIconWrap: { width: 34, height: 34, borderRadius: "50%", background: "#fdecea", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 2 },
  statNum: { fontSize: 22, fontWeight: 700 },
  statLabel: { fontSize: 13, color: "#666" },
  transferList: { display: "flex", flexDirection: "column", gap: 10 },
  transferRow: { display: "flex", alignItems: "center", gap: 10, background: "#f0faf4", borderRadius: 10, padding: "10px 14px", border: "1px solid #e0f2e9" },
  transferAvatar: { width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  transferInitials: { fontSize: 12, fontWeight: 500, color: "#fff" },
  transferName: { flex: 1, fontSize: 13, fontWeight: 400, color: "#111" },
  flagWrap: { display: "flex", alignItems: "center" },
  transferAmount: { fontSize: 13, fontWeight: 400, color: "#111" },
  statusBadge: { fontSize: 13, color: "#22a559", fontWeight: 400, minWidth: 70 },
  viewBtn: { fontSize: 13, color: "#E53E3E", background: "none", border: "none", cursor: "pointer", fontWeight: 400, padding: 0 },
  limitsRow: { display: "flex", gap: 40, marginBottom: 10 },
  limitLabel: { fontSize: 12, color: "#888", marginBottom: 4 },
  limitValue: { fontSize: 15, fontWeight: 600 },
  limitNote: { fontSize: 12, color: "#555", margin: 0 },
  linkRed: { color: "#E53E3E", textDecoration: "none", fontWeight: 500 },
  transferCard: { background: "#fff", borderRadius: 12, padding: "24px 22px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 14 },
  transferTitle: { fontSize: 17, fontWeight: 600, margin: 0, textAlign: "center" },
  fieldGroup: { background: "#f9f9f9", border: "1px solid #e5e5e5", borderRadius: 8, padding: "10px 14px", display: "flex", flexDirection: "column", gap: 4 },
  fieldLabel: { fontSize: 12, color: "#999" },
  fieldRow: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  fieldAmount: { fontSize: 15, fontWeight: 600, color: "#111" },
  fieldValue: { fontSize: 14, fontWeight: 500, color: "#111" },
  currencyChip: { display: "flex", alignItems: "center", gap: 5 },
  chipText: { fontSize: 13, fontWeight: 600, color: "#111" },
  emptyBox: { height: 52, background: "#f9f9f9", border: "1px solid #e5e5e5", borderRadius: 8 },
  infoRow: { display: "flex", alignItems: "center", gap: 8 },
  redDot: { width: 10, height: 10, borderRadius: "50%", background: "#E53E3E", flexShrink: 0 },
  infoLabel: { flex: 1, fontSize: 13, color: "#333" },
  infoValue: { fontSize: 13, color: "#333", fontWeight: 500 },
  sendBtn: { width: "100%", padding: "14px", background: "#E53E3E", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 4, transition: "background 0.15s, transform 0.1s" },

  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" },

  modal: { background: "#fff", borderRadius: 16, padding: "48px 40px 36px", width: 480, maxWidth: "90vw", display: "flex", flexDirection: "column", gap: 28 },
  modalMessage: { fontSize: 16, fontWeight: 500, textAlign: "center", color: "#222", margin: 0 },
  modalBtns: { display: "flex", gap: 16 },
  btnNo: { flex: 1, padding: 18, borderRadius: 10, background: "#f0f0f0", border: "none", fontSize: 18, fontWeight: 600, cursor: "pointer", color: "#222", transition: "background 0.15s" },
  btnYes: { flex: 1, padding: 18, borderRadius: 10, background: "#E53E3E", border: "none", fontSize: 18, fontWeight: 600, cursor: "pointer", color: "#fff", transition: "background 0.15s" },

  detailsModal: { background: "#fff", borderRadius: 16, padding: "40px 44px", width: 560, maxWidth: "92vw", display: "flex", flexDirection: "column", gap: 32 },
  detailsSection: { display: "flex", flexDirection: "column", gap: 12 },
  detailsLabel: { fontSize: 18, fontWeight: 600, color: "#222", margin: 0 },
  selectWrap: { display: "flex", alignItems: "center", background: "#f4f4f4", border: "1px solid #e5e5e5", borderRadius: 8, padding: "14px 16px", gap: 8 },
  select: { flex: 1, border: "none", background: "transparent", fontSize: 15, color: "#555", appearance: "none", outline: "none", cursor: "pointer" },
  checkboxRow: { display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" },
  checkbox: { width: 18, height: 18, marginTop: 2, accentColor: "#E53E3E", cursor: "pointer", flexShrink: 0 },
  checkboxText: { fontSize: 14, color: "#333", lineHeight: 1.5 },
  sendNowBtn: { width: "100%", padding: "16px", background: "#E53E3E", color: "#fff", border: "none", borderRadius: 10, fontSize: 16, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" },

  reviewModal: { background: "#fff", borderRadius: 16, width: 560, maxWidth: "94vw", maxHeight: "90vh", display: "flex", flexDirection: "column", overflow: "hidden" },
  reviewHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 28px 16px", borderBottom: "1px solid #f0f0f0" },
  backBtn: { background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" },
  reviewTitle: { fontSize: 18, fontWeight: 700, margin: 0, color: "#111" },
  reviewScroll: { overflowY: "auto", padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 20 },
  reviewTable: { display: "flex", flexDirection: "column" },
  reviewRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: "1px solid #f5f5f5" },
  reviewLabel: { fontSize: 13, color: "#888" },
  reviewValue: { fontSize: 13, color: "#111", fontWeight: 500, textAlign: "right" },
  receiverTitle: { fontSize: 15, fontWeight: 700, color: "#111", margin: 0 },
  noticesBox: { display: "flex", flexDirection: "column", gap: 10 },
  noticeRow: { display: "flex", alignItems: "flex-start", gap: 10 },
  noticeCheck: { width: 18, height: 18, borderRadius: 3, background: "#E53E3E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 },
  noticeText: { fontSize: 12, color: "#E53E3E", lineHeight: 1.5, margin: 0 },
  reviewBtns: { display: "flex", gap: 14, marginTop: 4 },
  editBtn: { flex: 1, padding: "14px", background: "#f0f0f0", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", color: "#333", transition: "background 0.15s" },
  makePaymentBtn: { flex: 1.6, padding: "14px", background: "#E53E3E", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", color: "#fff", transition: "background 0.15s" },

  pinModal: { background: "#fff", borderRadius: 16, padding: "52px 44px 44px", width: 560, maxWidth: "92vw", display: "flex", flexDirection: "column", alignItems: "center", gap: 40 },
  pinTitle: { fontSize: 20, fontWeight: 600, color: "#111", margin: 0, textAlign: "center" },
  pinBoxes: { display: "flex", gap: 20, justifyContent: "center" },
  pinBox: { width: 72, height: 72, borderRadius: 10, border: "none", background: "#ebebeb", fontSize: 28, textAlign: "center", outline: "none", color: "#111", cursor: "text" },
  pinNextBtn: { width: "60%", padding: "16px", background: "#E53E3E", color: "#fff", border: "none", borderRadius: 10, fontSize: 17, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" },

  noticeModal: { background: "#fff", borderRadius: 16, padding: "52px 48px 44px", width: 640, maxWidth: "94vw", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 },
  noticeBigTitle: { fontSize: 28, fontWeight: 700, color: "#E53E3E", margin: 0, textAlign: "center" },
  noticeBody: { fontSize: 15, color: "#222", textAlign: "center", margin: 0, lineHeight: 1.6 },
  noticeRed: { color: "#E53E3E", fontWeight: 500 },
  noticeDetails: { display: "flex", flexDirection: "column", gap: 8, alignItems: "center", marginTop: 4 },
  noticeDetailLine: { fontSize: 15, color: "#222", margin: 0 },
  noticeDoneBtn: { marginTop: 12, width: "60%", padding: "16px", background: "#d0d0d0", color: "#444", border: "none", borderRadius: 10, fontSize: 17, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" },

  successModal: { background: "#fff", borderRadius: 16, padding: "52px 48px 44px", width: 560, maxWidth: "92vw", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 },
  successBadge: { width: 110, height: 110, borderRadius: "50%", background: "#22a559", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 },
  successTitle: { fontSize: 26, fontWeight: 700, color: "#111", margin: 0, textAlign: "center" },
  successBody: { fontSize: 15, color: "#444", textAlign: "center", margin: 0, lineHeight: 1.6 },
  successDoneBtn: { marginTop: 16, width: "60%", padding: "16px", background: "#E53E3E", color: "#fff", border: "none", borderRadius: 10, fontSize: 17, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" },

  /* Receipt Page */
  receiptPage: { flex: 1, overflowY: "auto", padding: "32px 48px", display: "flex", justifyContent: "center" },
  receiptContainer: { width: "100%", maxWidth: 720, display: "flex", flexDirection: "column", gap: 0 },
  receiptHeader: { display: "flex", alignItems: "flex-start", marginBottom: 32, position: "relative" },
  goHomeBtn: { display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: 0, position: "absolute", left: 0, top: 4 },
  goHomeText: { fontSize: 14, color: "#E53E3E", fontWeight: 500 },
  receiptTitleBlock: { flex: 1, textAlign: "center" },
  receiptTitle: { fontSize: 22, fontWeight: 700, color: "#111", margin: "0 0 4px" },
  receiptSubtitle: { fontSize: 14, color: "#555", margin: 0 },
  receiptTable: { display: "flex", flexDirection: "column", marginBottom: 28 },
  receiptRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #f0f0f0" },
  receiptLabel: { fontSize: 14, color: "#888" },
  receiptValue: { fontSize: 14, color: "#111", fontWeight: 500, textAlign: "right" },
  successPill: { background: "#22a559", color: "#fff", fontSize: 13, fontWeight: 600, padding: "4px 14px", borderRadius: 20 },
  receiverSectionTitle: { fontSize: 16, fontWeight: 700, color: "#111", margin: "0 0 4px" },
  receiptBtns: { display: "flex", gap: 16, marginTop: 32 },
  downloadBtn: { flex: 1, padding: "15px", background: "#f0f0f0", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", color: "#333", transition: "background 0.15s" },
  shareBtn: { flex: 1, padding: "15px", background: "#E53E3E", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: "pointer", color: "#fff", transition: "background 0.15s" },
};

/* ─── Flag Component ──────────────────────────────────────────── */
function Flag({ code, size = 24 }) {
  return (
    <img src={`https://flagcdn.com/w40/${code}.png`} width={size} height={Math.round(size * 0.67)}
      style={{ borderRadius: 3, objectFit: "cover", display: "block" }} alt={code} />
  );
}

/* ─── Icon Components ─────────────────────────────────────────── */
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
function BellIcon({ size = 20, color = "#333" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 17H9v1a3 3 0 006 0v-1z" fill={color} />
      <path d="M18 13V10a6 6 0 10-12 0v3l-2 4h16l-2-4z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}
function TransferIcon({ size = 18, color = "#E53E3E" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M7 16H20M20 16l-3-3M20 16l-3 3" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 8H4M4 8l3-3M4 8l3 3" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronDown({ size = 16, color = "#555" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SendArrowIcon({ size = 16, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22 11 13 2 9l20-7z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
