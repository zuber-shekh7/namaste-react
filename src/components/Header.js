import React from "react";

// utils
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="foodVerse Logo" />
      </div>
      <div className="links-container">
        <ul className="links">
          <li className="link">Home</li>
          <li className="link">About Us</li>
          <li className="link">Contact Us</li>
          <li className="link">Profile</li>
          <li className="link">Cart</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
