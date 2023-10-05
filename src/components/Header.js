import React, { useState } from "react";

// utils
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLogin, setIsLogin] = useState();

  const handleBtnClick = () => {
    setIsLogin(!isLogin);
  };

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
          <li className="link" onClick={handleBtnClick}>
            {isLogin ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
