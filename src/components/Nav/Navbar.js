import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logow.png";

export const Navbar = () => {
  const handleClick = (e) => {
    if (e.target.innerText === "Modelos") {
      window.scrollTo(0, 500);
    } else {
      window.scrollTo(0, 5000);
    }
  };

  return (
    <nav className="nav-container">
      <img src={logo} alt="logo" className="nav-logo" />

      <ul className="nav-list">
          <li onClick={handleClick} className="nav-item">Modelos</li>

          <li onClick={handleClick} className="nav-item">Más sobre nosotros</li>
      </ul>
    </nav>
  );
};
