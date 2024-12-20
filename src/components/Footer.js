import React from "react";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section with Logo and Social Icons */}
      <div className="footer-top">
        <div className="footer-logo">
          <h2>JIHC College</h2>
        </div>
      </div>

      {/* Middle Section with Contact Info */}
      <div className="footer-contact">
        <div className="footer-contact-item">
          <p>123 JIHC Street, Main City, Country</p>
        </div>
        <div className="footer-contact-item">
          <p>+123 456 789</p>
        </div>
        <div className="footer-contact-item">
          <p>info@jihccollege.edu</p>
        </div>
      </div>

      {/* Bottom Section with Links and Copyright */}
      <div className="footer-bottom">
        <ul className="footer-links">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright">
          © {new Date().getFullYear()} JIHC College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
