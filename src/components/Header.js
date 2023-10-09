import React, { useState } from "react";
import { Link } from "react-router-dom";

// utils
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState();
  const onlineStatus = useOnlineStatus();

  const handleBtnClick = () => {
    setIsLogin(!isLogin);
  };

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="foodVerse Logo" />
        </Link>
      </div>
      <div className="links-container">
        <ul className="links">
          <li className="link">
            <span>Internet Status {onlineStatus ? "👍🏼" : "👎🏼"}</span>
          </li>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="link">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className="link">
            <Link to="/grocery">Grocery</Link>
          </li>
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
