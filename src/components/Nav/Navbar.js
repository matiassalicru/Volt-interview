import React from 'react'
import './Navbar.css';
import logo from '../../assets/images/logow.png'

export const Navbar = () => {
    return (
      <nav className="nav-container">
        <img src={logo} alt="logo" className='nav-logo'/>

        <ul className='nav-list'>
            <li className='nav-item'>Modelos</li>
            <li className='nav-item'>Más sobre nosotros</li>
        </ul>
      </nav>
    );
}
