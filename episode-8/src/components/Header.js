import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import Button from "./Button";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="nav">
      <header className="header flex justify-between align-center">
        {/* LEFT SECTION */}
        <Link to="/">
          <section className="flex justify-center align-center">
            <img className="logo" src={LOGO_URL} alt="Food Verse's Logo" />
            <h1 className="title">Food Verse</h1>
          </section>
        </Link>
        {/* RIGHT SECTION */}
        <section>
          <ul className="nav-links flex justify-center align-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Button className="button-md" onClick={handleButtonClick}>
                {isLoggedIn ? "Logout" : "Login"}
              </Button>
            </li>
          </ul>
        </section>
      </header>
    </nav>
  );
};

export default Header;
