import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { path: "/projects", label: "Projekty" },
  { path: "/about", label: "O mnie" },
  { path: "/how-we-work", label: "Jak działamy" },
  { path: "/offer", label: "Ofertownik" },
  { path: "/contact", label: "Kontakt" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 992;


  useEffect(() => {
    const saved = localStorage.getItem("darkMode");

    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <div className="navbar__logo"></div>
      </Link>

      <div className={`navbar__wrapper ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            {link.label}
          </NavLink>
        ))}

        {isMobile &&
           <NavLink
            to="/cookies"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            Polityka prywatności
          </NavLink>
        }

        <div  className="navbar__darkmode-wrapper">
          <button className="navbar__darkmode" onClick={() => setDarkMode((prev) => !prev)} >
            <div className={`icon ${darkMode ? "is-dark" : "is-light"}`}>
              <span className="sun"></span>
              <span className="moon"></span>
            </div>
          </button>

          <a href="https://www.instagram.com/kand.studio/" target="_blank" rel="noreferrer">
            <div className="navbar__ig"></div>
          </a>
        </div>
      </div>

      {/* <button
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <div className="icon"></div>
      </button> */}

      <button
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span>MENU</span>
      </button>
    </nav>
  );
}

export default Navbar;