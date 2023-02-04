import React from "react";
import Logo from "../../assets/logo.png";
import Refresh from "../../assets/refresh.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img className="weather_logo" src={Logo} alt="logo" />
          <span>Weather 99</span>
        </div>
        <div className="refresh">
          <img className="refresh_logo" src={Refresh} alt="" />
          <span>Refresh</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
