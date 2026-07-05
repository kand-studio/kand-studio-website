import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "cookie-banner-hidden";

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const expires = localStorage.getItem(COOKIE_KEY);

    if (!expires || Date.now() > Number(expires)) {
      setVisible(true);
    }
  }, []);

  const closeBanner = () => {
    const expires = Date.now() + 30 * 24 * 60 * 60 * 1000;

    localStorage.setItem(COOKIE_KEY, expires.toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Ta strona wykorzystuje niezbędne pliki cookie w celu zapewnienia
        prawidłowego działania. Więcej informacji znajdziesz w{" "}
        <Link to="/cookies">Polityce Cookies</Link>.
      </p>

      <button onClick={closeBanner}>OK</button>
    </div>
  );
}

export default CookieBanner;