import React from "react";
import Hero from "../components/Hero";
import CompanyInfo from "../components/CompanyInfo";
import Services from "../components/Services";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Hero />
      <CompanyInfo />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
