import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__content container">
        <div className="Footer__copyright">
          <p>© 2023 by Amanda Willman.</p>
          <p>
            Demo only, inspired by{' '}
            <a
              href="https://www.wix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="Footer__copyrightLink"
            >
              Wix.com
            </a>
          </p>
        </div>
        <ul className="Footer__linkList">
          <li className="Footer__link">
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li className="Footer__link">
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li className="Footer__link">
            <a href="https://twitter.com/">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
