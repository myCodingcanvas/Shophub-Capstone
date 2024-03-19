import React, { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const toggleMobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <nav className="relative w-full px-5 py-5 mx-auto md:px-6 md:py-6 bg-gray-800 text-white ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          {/* <img src={logo} alt="logo" /> */}
          <Link to="/">
            <h1 className="text-3xl font-bold text-white">ShopHub</h1>
          </Link>
        </div>
        <div className="hidden items-center space-x-4 font-bold md:flex text-gray-300">
          <Link className="flex items-center space-x-1" to="/cart">
            <FaShoppingCart />
            <div className="flex space-x-1 items-center">
              <p>Cart</p>
            </div>
          </Link>
          <Link className="flex items-center space-x-1" to="/login">
            <FaUser />
            <div>Login</div>
          </Link>
        </div>
        <button
          className={`${
            openMobileMenu && "open"
          } block hamburger md:hidden focus:outline-none`}
          onClick={toggleMobileMenuHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
        <div
          className={`absolute ${
            !openMobileMenu ? "hidden" : "flex"
          }  p-6 rounded-lg bg-gray-800 left-0 right-0 top-20 z-100 md:hidden`}
        >
          <div className="flex flex-col items center justify-center w-full space-y-6 font-bold rounded-sm text-gray-300">
            <Link className="flex w-full items-center space-x-2" to="/cart">
              <FaShoppingCart />
              <div className="flex space-x-1 items-center">
                <p>Cart</p>
              </div>
            </Link>
            <Link className="flex w-full items-center space-x-2" to="/login">
              <FaUser />
              <div>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
