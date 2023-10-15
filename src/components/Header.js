import React, { useState } from "react";
import { Link } from "react-router-dom";

// utils
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogin, setIsLogin] = useState();
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((state) => state.cart.items);

  const handleBtnClick = () => {
    setIsLogin(!isLogin);
  };

  const linkClass =
    "text-xs sm:text-sm lg:text-base font-bold uppercase hover:cursor-pointer";

  return (
    <nav className="flex justify-between items-center border-b-2 border-b-black shadow-lg mx-auto px-5">
      <div className="">
        <Link to="/">
          <img className="h-24 w-24" src={LOGO_URL} alt="foodVerse Logo" />
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-around gap-x-2 items-center">
          <li className={linkClass}>
            <span>Internet Status {onlineStatus ? "👍🏼" : "👎🏼"}</span>
          </li>
          <li className={linkClass}>
            <Link to="/">Home</Link>
          </li>
          <li className={linkClass}>
            <Link to="/about">About</Link>
          </li>
          {/* <li className="link">
            <Link to="/contact">Contact</Link>
          </li> */}
          <li className={linkClass}>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className={linkClass}>Profile</li>
          <li className={linkClass}>
            <Link to="/cart">
              Cart <span className="text-green-600">({cartItems.length})</span>
            </Link>
          </li>
          <li className={linkClass} onClick={handleBtnClick}>
            {isLogin ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
