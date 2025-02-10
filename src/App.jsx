import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import Hero from "./components/Hero";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
const App = () => {
  return (
    <div>
      <ScrollToTopOnMount />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uber-uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/leistungen" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
