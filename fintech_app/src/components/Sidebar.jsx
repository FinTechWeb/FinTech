// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <h2 className="logo">Logo</h2>

//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/" className="link">
//               <span className="icon-home"></span>
//               Home
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/history" className="link">
//               <span className="icon-history"></span>
//               Transaction History
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/beneficiaries" className="link">
//               <span className="icon-users"></span>
//               Beneficiaries
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/limits" className="link">
//               <span className="icon-limits"></span>
//               Account limits
//             </NavLink>
//           </li>

//           <li>
//             <NavLink to="/profile" className="link">
//               <span className="icon-profile"></span>
//               Profile
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Logo</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/home"
          end
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </span>
          <span className="nav-label">Home</span>
        </NavLink>

        <NavLink
          to="/home/transactions"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
          </span>
          <span className="nav-label">Transaction History</span>
        </NavLink>

        <NavLink
          to="/home/beneficiaries"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </span>
          <span className="nav-label">Beneficiaries</span>
        </NavLink>

        <NavLink
          to="/home/account-limits"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4m0 4h.01" />
            </svg>
          </span>
          <span className="nav-label">Account limits</span>
        </NavLink>

        <NavLink
          to="/home/profile"
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <span className="nav-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <span className="nav-label">Profile</span>
        </NavLink>
      </nav>
    </aside>
  );
}
