// PAGE: Profile
// This is the profile page where the user can view and edit their personal details.
// It shows their name, email address, and phone number.
// The user can also log out of their account from this page.
// Route: /profile


import "../../styles/PageCommon.css";



export default function Profile() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const initials = `${user?.firstName?.[0] || ""}${user?.lastName?.[0] || ""}`;

  return (
    <div className="profile-page">
      <div className="profile-card">

        {/* Top row */}
        <div className="profile-top">
          <div className="profile-avatar-wrap">
            <div className="profile-avatar">{initials}</div>
            <span className="profile-name">{user?.firstName} {user?.lastName}</span>
          </div>
          <button className="edit-profile-btn">Edit profile</button>
        </div>

        {/* Personal details */}
        <div className="profile-section">
          <h3 className="profile-section-title">Personal details</h3>
          <div className="profile-grid">
            <div className="profile-field">
              <p className="profile-field-label">First name</p>
              <p className="profile-field-val">{user?.firstName || "—"}</p>
            </div>
            <div className="profile-field">
              <p className="profile-field-label">Last name</p>
              <p className="profile-field-val">{user?.lastName || "—"}</p>
            </div>
            <div className="profile-field">
              <p className="profile-field-label">Country of residence</p>
              <p className="profile-field-val">{user?.country || "United Kingdom"}</p>
            </div>
            <div className="profile-field">
              <p className="profile-field-label  email-label">Email address</p>
              <p className="profile-field-val email-val">{user?.email || "—"}</p>
            </div>
          </div>
        </div>

        {/* Transaction limits */}
        <div className="profile-section">
          <h3 className="profile-section-title">Transaction limits</h3>
          <div className="profile-limits-row">
            <div className="profile-field">
              <p className="profile-field-label">Daily limit</p>
              <p className="profile-field-val">20,000 UK</p>
            </div>
            <div className="profile-field">
              <p className="profile-field-label">Yearly limit</p>
              <p className="profile-field-val">1,000,000 UK</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


