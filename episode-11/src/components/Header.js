import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import Button from "./Button";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { user, userLogin, userLogout } = useContext(UserContext);

  const handleButtonClick = () => {
    if (user) {
      userLogout();
    } else {
      userLogin("Zuber Shekh");
    }
  };

  return (
    <nav className="bg-white border-b-2 border-orange-600">
      <header className="container mx-auto flex justify-between items-center">
        {/* LEFT SECTION */}
        <Link to="/">
          <section className="flex items-center">
            <img className="h-16 w-16" src={LOGO_URL} alt="Food Verse's Logo" />
            <h1 className="text-2xl font-bold text-orange-600">Food Verse</h1>
          </section>
        </Link>
        {/* RIGHT SECTION */}
        <section>
          <ul className="flex justify-between items-center">
            <li className="px-2">
              <Link
                className="text font-base text-orange-600 hover:text-orange-700"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="px-2">
              <Link
                className="text font-base text-orange-600 hover:text-orange-700"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="px-2">
              <Link
                className="text font-base text-orange-600 hover:text-orange-700"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="px-2">
              <Link
                className="text font-base text-orange-600 hover:text-orange-700"
                to="/cart"
              >
                Cart
              </Link>
            </li>
            <li className="px-2">
              <Button onClick={handleButtonClick}>
                {user ? "Logout" : "Login"}
              </Button>
            </li>
          </ul>
        </section>
      </header>
    </nav>
  );
};

export default Header;
