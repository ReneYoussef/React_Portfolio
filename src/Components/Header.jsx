import logo from"../assets/logo.png";
import React from "react";
import ContactForm from "./ContactForm/Contactform";

export default function Header() {
  const [showContact, setShowContact] = React.useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-title">
          <img src={logo} alt="" />
          <a href="/" className="header-text">Rene Youssef</a>
        </div>
        <div className="nav-links">
          <a href="">Services</a>
          <a href="">Projects</a>
          <a href="">Exp & Edu</a>
          <a href="">Skills</a>
          <button onClick={() => setShowContact(true)}>Let's Talk</button>
        </div>
      </nav>

      {showContact && <ContactForm onClose={() => setShowContact(false)} />}
    </header>
  );
}
