import { Outlet , NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";
import "../styles/AppLayout.css";

export default function AppLayout() {
      const user = JSON.parse(sessionStorage.getItem("user")); // ← add this
  const initials = `${user?.firstName?.[0] || ""}${user?.lastName?.[0] || ""}`;
  return (
    <div className="app-wrapper">
      <Sidebar />

      <div className="app-main">
        {/* HEADER */}
        <header className="app-header">
          <div className="header-user">
            <div className="user-avatar">{initials}</div>
            <span className="user-name">{user?.firstName} {user?.lastName}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
            <div className="header-divider" />
            <button className="bell-btn" aria-label="Notifications">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="app-content">
          <Outlet />
        </main>
      </div>

       <nav className="bottom-nav">
        <NavLink to="/home" end className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          Home
        </NavLink>

        <NavLink to="/home/transactions" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          History
        </NavLink>

        <NavLink to="/home/beneficiaries" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
          Beneficiaries
        </NavLink>

        <NavLink to="/home/account-limits" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4m0 4h.01" />
          </svg>
          Limits
        </NavLink>

        <NavLink to="/home/profile" className={({ isActive }) => isActive ? "bottom-nav-item active" : "bottom-nav-item"}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}
