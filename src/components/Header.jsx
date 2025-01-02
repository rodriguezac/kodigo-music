import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Header = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const closeModals = () => {
    setShowLogin(false);
    setShowSignUp(false);
  };

  return (
    
    <header className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 sm:px-8 py-3 shadow-lg z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={assets.kmusic_logo}
          alt="Logo"
          className="w-10 h-10 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Home + Search Bar */}
      <div className="flex items-center space-x-4">
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="hidden sm:flex bg-[#1F1F1F] p-2 rounded-full"
        >
          <img src={assets.home_icon} alt="Home" className="w-8 h-6" />
        </button>

        {/* Search bar */}
        <div className="hidden sm:flex items-center bg-[#1F1F1F] rounded-full px-4 py-2 w-full max-w-lg">
          <img className="w-6" src={assets.search_icon} alt="Search" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="bg-transparent text-base text-white placeholder-gray-500 focus:outline-none w-full ml-2"
          />
        </div>

        {/* Home and Search Icons for Small Screens */}
        <div className="flex sm:hidden space-x-4">
          <button className="bg-[#1F1F1F] p-2 rounded-full">
            <img src={assets.home_icon} alt="Home" className="w-6 h-6" />
          </button>
          <button className="bg-[#1F1F1F] p-2 rounded-full">
            <img className="w-6 h-6" src={assets.search_icon} alt="Search" />
          </button>
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            setShowSignUp(true);
            setShowLogin(false);
          }}
          className="text-gray-300 hover:text-white text-sm"
        >
          Sign up
        </button>
        <button
          onClick={() => {
            setShowLogin(true);
            setShowSignUp(false);
          }}
          className="bg-white text-black rounded-full px-4 py-1 hover:bg-gray-200 text-sm"
        >
          Log in
        </button>
      </div>

      {/* Modales */}
      {showLogin && <LoginForm onClose={closeModals} />}
      {showSignUp && <SignUpForm onClose={closeModals} />}
    </header>
  );
};

export default Header;
