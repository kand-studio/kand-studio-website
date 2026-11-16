import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
   const isMobile = window.innerWidth <= 992;

  return (
    <nav className="footer">
      <div className="footer__text">
        <p>{currentYear} © All rights reserved {!isMobile && "/ "} {!isMobile && <Link to="/cookies">Polityka prywatności</Link>}</p>
      </div>
      <a href="https://www.instagram.com/kand.studio/" target="_blank" rel="noreferrer">
        <div className="footer__icon"></div>
      </a>
    </nav>
  );
}

export default Footer;
