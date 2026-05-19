import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

export default function Register() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

   const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

   const handleSubmit = async () => {
    setError("");

    // Basic validation
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      return setError("Please fill in all required fields.");
    }
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }
    if (!form.agreed) {
      return setError("You must agree to the terms & conditions.");
    }

    try {
      // Check if email already exists
      const checkRes = await fetch(
        `https://fintech-api-m2gh.onrender.com/users?email=${form.email}`
      );
      const existing = await checkRes.json();
      if (existing.length > 0) {
        return setError("An account with this email already exists.");
      }


       // Save user to json-server
      const res = await fetch("https://fintech-api-m2gh.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          country: form.country,
          email: form.email,
          phone: form.phone,
          password: form.password, // NOTE: plain text for dev only
        }),
      });

       if (res.ok) {
        navigate("/verify");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Could not connect to server. Is json-server running?");
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="register-left-img" />
        <div className="register-left-bg" />
        <div className="register-left-content">
          <div className="register-left-logo">Logo</div>
          <div className="register-left-text">
            The fastest way to <span>send money abroad</span>
          </div>
        </div>
      </div>

      <div className="register-right">
        <div className="register-logo-top">Logo</div>

        <div className="steps">
          <div className="step">
            <div className="step-num active">1</div>
            <span className="step-label active">Sign up</span>
          </div>
          <div className="step-divider" />
          <div className="step">
            <div className="step-num inactive">2</div>
            <span className="step-label inactive">Verify Email</span>
          </div>
          <div className="step-divider" />
          <div className="step">
            <div className="step-num inactive">3</div>
            <span className="step-label inactive">Upload credentials</span>
          </div>
        </div>

        <h1 className="register-title">Sign up</h1>
        <p className="register-sub">
          Please fill in your name as it appears on your official documents and government IDs
        </p>
        <p className="register-sub">
          Already have an account?
          <Link to="/signin">Log in here</Link>
        </p>
               
             {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}

        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">First name</label>
            <input className="form-input" type="text" name="firstName" value={form.firstName}  onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label className="form-label">Last name</label>
            <input className="form-input" type="text" name="lastName" value={form.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Country of residence</label>
            <input className="form-input" type="text" name="country" value={form.country} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Phone number</label>
            <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrap">
              <input className="form-input" type={showPass ? "text" : "password"} name="password" value={form.password} onChange={handleChange}/>
              <button className="eye-btn" onClick={() => setShowPass((p) => !p)}>
                <EyeIcon show={showPass} />
              </button>
            </div>
          </div>
          <div className="form-group ">
            <label className="form-label">Confirm password</label>
            <div className="input-wrap">
              <input className="form-input" type={showConfirm ? "text" : "password"} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
              <button className="eye-btn" onClick={() => setShowConfirm((p) => !p)}>
                <EyeIcon show={showConfirm} />
              </button>
            </div>
          </div>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" id="agree" name="agreed" checked={form.agreed} onChange={handleChange}/>
          <label htmlFor="agree">
            I agree to the <a href="#">terms &amp; conditions</a> and{" "}
            <a href="#">privacy policy</a>
          </label>
        </div>

        <div className="register-footer">
          <button className="btn-next" onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  );
}
