// // PAGE: Landing Page
// // This is the first page anyone sees when they visit the app before they log in.
// // It introduces the app, shows its key features,
// // and has two buttons � one to Sign Up and one to Sign In.
// // Route: /

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


import "./LandingPage.css";
import heroImg from "../../photos/hero.jpg";
import cardImg from "../../photos/Card.png";
import card1 from "../../photos/Card1.png";
import card2 from "../../photos/Card2.png";
import card3 from "../../photos/Card3.png";
import worldImg from "../../photos/world.png";
import card4 from "../../photos/Card4.png";
import card5 from "../../photos/Card5.png";
import card6 from "../../photos/Card6.png";
import card7 from "../../photos/Card7.png";
import card8 from "../../photos/Card8.png";
import country from "../../photos/Country.png";
import vector from "../../photos/Vector.jpg";
import card9 from "../../photos/Card9.png";
import card10 from "../../photos/Card10.png";
import card11 from "../../photos/Card11.png";



export default function LandingPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Logo</h2>
        <div className="nav-buttons">
          <button className="btn-outline"  onClick={() => navigate("/signin")}>Login</button>
          <button className="btn-solid"  onClick={() => navigate("/register")} >Register</button>
        </div>

         {/* Hamburger icon */}
  <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? "✕" : "☰"}
  </button>

  {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}

  <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
  <div className="mobile-header">
    <h2>Logo</h2>
    <button onClick={() => setMenuOpen(false)}>✕</button>
  </div>

  <div className="mobile-links">
    <p>FAQs</p>
    <p>Help center</p>
  </div>

  <div className="mobile-buttons">
    <button className="btn-outline" onClick={() => navigate("/signin")}>
      Login
    </button>
    <button className="btn-solid" onClick={() => navigate("/register")}>
      Sign up
    </button>
  </div>
</div>
        
      </nav>

       

      {/* HERO */}
      <section className="hero"  style={{ backgroundImage: `url(${heroImg})` }} >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>
              Send Money <br />
              <span>Without</span> Borders
            </h1>
            <p>
              Fast, secure, and low-cost international transfers.
            </p>

            <div className="hero-buttons">
              <button className="btn-solid">Get Started</button>
              <button className="btn-outline">Learn More</button>
            </div>
          </div>
          
           <div className="card">
           <img src={cardImg} alt="" />
           
        </div>
        </div>
      </section>

      

      {/* WHY SECTION */}
      <section className="section center">
        <h2>Why Choose Frica Exchange</h2>
        <div className="section-center-card">
          <div className="Fcard">
            <img src={card1} alt="" />
          </div>

            <div className="Mcard">
            <img src={card2} alt="" />
          </div>

            <div className="Lcard">
            <img src={card3} alt="" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" style={{ backgroundImage: `url(${worldImg})` }}>
        <h2>We are closer than you think</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
           Dolor veniam totam incidunt nulla sint esse.</p>
        <button className="btn-solid" onClick={() => navigate("/register")} >Register</button>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2 className="center">How Does It Works?</h2>
        <div className="grid">
          <div className="grid-card"><img src={card4} alt="" /></div>
          <div className="grid-card"><img src={card5} alt="" /></div>
          <div className="grid-card"><img src={card6} alt="" /></div>
          <div className="grid-card"><img src={card7} alt="" /></div>
        </div>
      </section>

      <section className="country" style={{ backgroundImage: `url(${country})` }}>
       
      </section>

        <section className="section-card">
          <img src={card8} alt="" />
       </section>

        <section className="cta1" style={{ backgroundImage: `url(${vector})` }}>
        <h2>We are the fastest way to <span className="highlight">send money abroad</span></h2>
       
        <button className="btn-solid" onClick={() => navigate("/register")} >Register</button>
      </section>

      {/* NEWS + FAQ */}
      <section className="news-faq">
        <div className="news">
          <div className="news-card"><img src={card9} alt="" /></div>
          <div className="news-card"><img src={card10} alt="" /></div>
        </div>

        <div className="faq">
          <h3>News & FAQ</h3>
          <details>
            <summary>How do I create an account?</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Inventore atque ipsam distinctio voluptates quia,
                a unde vel nesciunt fugit tempora.</p>
          </details>

           <details>
            <summary>How do I reset my password?</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Inventore atque ipsam distinctio voluptates quia,
                a unde vel nesciunt fugit tempora.</p>
          </details>

           <details>
            <summary>How do I change my personal details?</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Inventore atque ipsam distinctio voluptates quia,
                a unde vel nesciunt fugit tempora.</p>
          </details>

           <details>
            <summary>How do I contact support staff?</summary>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Inventore atque ipsam distinctio voluptates quia,
                a unde vel nesciunt fugit tempora.</p>
          </details>
        </div>
      </section>

      <section className="Apps" style={{ backgroundImage: `url(${card11})` }}>

      </section>

      <div className="subscribe">
        <h3>Subscribe to our rates alert</h3>
        <div className="subscribe-form">
          <input type="email" placeholder="Type your email address" />
          <button className="btn-solid">Subscribe</button>
        </div>
   </div>

      {/* FOOTER */}
      <footer className="footer">
       
      </footer>
    </div>
  );
}