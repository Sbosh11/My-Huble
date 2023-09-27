import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <div className="nav-header">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <button className="nav-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/accordion" onClick={closeMenu}>
            Snapdocs Accordion
          </Link>
          <Link to="/calculator" onClick={closeMenu}>
            Calculator
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
