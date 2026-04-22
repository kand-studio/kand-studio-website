import { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./style/style.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home"
import About from "./pages/About"
import Offer from "./pages/Offer"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Project001 from "./pages/Project001"
import ProjectPage from "./pages/ProjectPage"

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const isProjectPage = location.pathname.includes("project-00");

    if (!isProjectPage) {
      document.body.classList.remove(
        "hero-active",
        "footer-hero",
      );
    }
  }, [location.pathname]);

  return (
    <div className={`container ${isHome ? "" : "container--padding-bottom"}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact" element={<Contact />} />
        {/* projects */}
        {/* <Route path="/project-001" element={<Project001 />} />
        <Route path="/project-002" element={<Project001 />} />
        <Route path="/project-003" element={<Project001 />} />
        <Route path="/project-004" element={<Project001 />} /> */}
        <Route path="/project/:number" element={<ProjectPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {!isHome && <Footer />}
    </div>
  );
}

export default App;