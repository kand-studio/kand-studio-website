import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../media/icons/logo.svg";

const links = [
  { path: "/about", label: "O mnie" },
  { path: "/contact", label: "Ofertownik" },
  { path: "/how", label: "Jak działamy" },
  { path: "/contact", label: "Kontakt" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <nav className="navbar">
      <Link to="/">
       <div className="navbar__logo"></div>
      </Link>

      <div className="navbar__wrapper">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              "navbar__link" + (isActive ? " navbar__link--active" : "")
            }
          >
            {link.label}
          </NavLink>
        ))}

      <button
        className="navbar__darkmode"
        onClick={() => setDarkMode((prev) => !prev)}
        >
        <div className={`icon ${darkMode ? "is-dark" : "is-light"}`}>
            <span className="sun"></span>
            <span className="moon"></span>
        </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;