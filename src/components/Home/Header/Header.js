import React from "react";
import './Header.css'
import headerImg from '../../../assets/images/header-red.png'

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-right">
        Una empresa 100% Argentina comprometida por un mundo más eléctrico.
      </div>

      <div className="header-left">
        <img className='header-image' src={headerImg} alt=""/>
      </div>

    </div>
  );
};