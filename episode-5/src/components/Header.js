import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <nav className="navigation">
      <section className="header-container">
        <section className="logo-container">
          <img className="logo" src={LOGO_URL} alt="FoodVerse's Logo" />
          <h1 className="title">Food Verse</h1>
        </section>
        <section className="nav-links-container">
          <ul className="nav-links">
            <li className="nav-link-item">
              <a href="">Home</a>
            </li>
            <li className="nav-link-item">
              <a href="">About Us</a>
            </li>
            <li className="nav-link-item">
              <a href="">Contact Us</a>
            </li>
            <li className="nav-link-item">
              <a href="">Cart</a>
            </li>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Header;