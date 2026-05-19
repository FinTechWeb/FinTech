import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../../styles/remit.css"

function EyeIcon({ show }) {
  return show ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

   const handleSignIn = async () => {
    // setError("");

    // if (!email || !password) {
    //   return setError("Please enter your email and password.");
    // }

    // try {
    //   const res = await fetch(
    //     `http://localhost:3002/users?email=${email}&password=${password}`
    //   );
    //   const users = await res.json();

      


    //   if (users.length > 0) {
    //     // Save logged-in user to sessionStorage
    //     sessionStorage.setItem("user", JSON.stringify(users[0]));
    //     navigate("/home");
    //   } else {
    //     setError("Invalid email or password.");
    //   }
    // } catch (err) {
    //   setError("Could not connect to server. Is json-server running?");
    // }

    
  setError("");

  if (!email || !password) {
    return setError("Please enter your email and password.");
  }

  try {
    const res = await fetch(`http://localhost:3002/users`);
    const users = await res.json();

    // Find user manually after fetching by email
    const matchedUser = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() &&
             u.password === password.trim()
    );

    if (matchedUser) {
      sessionStorage.setItem("user", JSON.stringify(matchedUser));
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  } catch (err) {
    setError("Could not connect to server. Is json-server running?");
  }

  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h1 className="signin-title">Welcome back!</h1>
        <p className="signin-sub">
          New to CosmoRemit?
          <Link to="/register">Sign up</Link>
        </p>

        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <div className="form-group">
          <label className="form-label">Email</label>
          <input className="form-input"
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <div className="input-wrap">
            <input className="form-input" type={showPass ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button className="eye-btn" onClick={() => setShowPass((p) => !p)}>
              <EyeIcon show={showPass} />
            </button>
          </div>
        </div>

        <button className="btn-primary" onClick={handleSignIn}>Sign in</button>
        <button className="forgot-link">Forgot password?</button>
      </div>
    </div>
  );
}
