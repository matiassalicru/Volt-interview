import React from "react";
import "./Footer.css";
// npm install --save-dev @iconify/react @iconify/icons-simple-line-icons
import { Icon } from "@iconify/react";
import socialInstagram from "@iconify/icons-simple-line-icons/social-instagram";
import socialFacebook from "@iconify/icons-simple-line-icons/social-facebook";
import socialLinkedin from "@iconify/icons-simple-line-icons/social-linkedin";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <h1 className="footer-title"> Volt Motors </h1>

      <p className="footer-about-us">
        Volt motors es la primer empresa latinoamericana dedicada a la creación
        de auto eléctricos, fundada en 2017 comprometida con el medio ambiente
        para borrar la huella de carbono del planeta.
      </p>

      <ul className="footer-social">
        <a href="https://www.facebook.com/volt.motors/">
          <Icon icon={socialFacebook} width="45" height="45" />
        </a>
        <a href="https://www.instagram.com/volt.motors/">
          <Icon icon={socialInstagram} width="45" height="45" />
        </a>
        <a href="https://www.linkedin.com/company/volt-motors">
          <Icon icon={socialLinkedin} width="45" height="45" />
        </a>
      </ul>
    </footer>
  );
};
