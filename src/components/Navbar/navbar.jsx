import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <img src="/assets/logo-text.png" alt="Dev Stack" />
        </a>

        <nav className="navbar-links">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-actions">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <div className="menu-overlay" onClick={closeMenu}></div>

          <aside className="mobile-drawer">
            <div className="drawer-header">
              <a href="#home" className="drawer-logo" onClick={closeMenu}>
                <img src="/assets/logo-text.png" alt="Dev Stack" />
              </a>

              <button
                className="close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="drawer-links">
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
              <a href="#technologies" onClick={closeMenu}>
                Technologies
              </a>
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}

export default Navbar;