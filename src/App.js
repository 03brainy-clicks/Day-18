import React from "react";
import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "./css/styles.css";
const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PortfolioSection />
      <About />
      <Contact />
      <Footer />
      <Copyright />
    </>
  );
};

export default App;
