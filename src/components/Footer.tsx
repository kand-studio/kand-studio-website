function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <nav className="footer">
      <div className="footer__text">
        <p>{currentYear} © All rights reserved</p>
      </div>
      <a href="https://www.instagram.com/kand.studio/" target="_blank" rel="noreferrer">
        <div className="footer__icon"></div>
      </a>
    </nav>
  );
}

export default Footer;