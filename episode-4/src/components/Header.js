import React from "react";

const Header = () => {
  return (
    <nav className="header-container">
      <section className="logo-container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
          alt="FoodVerse's Logo"
        />
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
    </nav>
  );
};

export default Header;
