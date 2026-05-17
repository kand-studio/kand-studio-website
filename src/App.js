import { useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./style/style.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from "./pages/Home"
import HomeV2 from "./pages/HomeV2"

import Projects from "./pages/Projects"
import About from "./pages/About"
import Work from "./pages/Work"
import Offer from "./pages/Offer"
import Contact from "./pages/Contact"
import Error from "./pages/Error"
import Project001 from "./pages/Project001"
import ProjectPage from "./pages/ProjectPage"

function App() {

  const location = useLocation();
  const isHome = location.pathname === "/homev2";
  const isProjectPage = location.pathname.includes("project");

  useEffect(() => {
    const isProjectPage = location.pathname.includes("project");

    if (!isProjectPage) {
      document.body.classList.remove(
        "hero-active",
        "footer-hero",
      );
    }
  }, [location.pathname]);

  return (
    <div className={`container ${(isHome || isProjectPage) ? "" : "container--padding-bottom"}`}>
      <Navbar />
      <Routes>
        <Route path="/homev2" element={<Home />} />
        {/* test */}
        <Route path="/" element={<HomeV2 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-we-work" element={<Work />} />
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