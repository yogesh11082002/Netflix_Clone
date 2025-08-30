import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay when menu is open */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

      <div className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="logo" />

          {/* Hamburger / Cross */}
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation Links */}
          <ul className={menuOpen ? "open" : ""}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        <div className="navbar-right">
          <img src={search_icon} alt="search icon" className="icons" />
          <p>Children</p>
          <img src={bell_icon} alt="bell icon" className="icons" />

          <div className="navbar-profile">
            <img src={profile_img} alt="profile" className="profile" />
            <img src={caret_icon} alt="caret" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
