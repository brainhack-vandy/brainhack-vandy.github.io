import React, { useState, useEffect } from "react";
import LoadingAnimation from "../src/components/LoadingAnimation";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import FAQ from "./components/Faq";
import Speakers from "./components/Speakers/Speakers";
import Footer from "./components/Footer";
import Teams from './components/Team/Team';
import Schedule from "./components/Schedule/Schedule";
import Educationals from "./components/Educationals/Educationals";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <LoadingAnimation load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/educationals" element={<Educationals />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

