import React from "react";
import Hero from "../components/Hero";
import CompanyInfo from "../components/CompanyInfo";
import Services from "../components/Services";

const Home = () => {
  const heroContent = {
    title: "Willkommen bei\nG&G Fugentechnik GmbH",
    subtitle: `Ihr Partner für Fugen-, Trennschnitt- und Rissesanierungstechnik 
               Fachbetrieb nach WHG EQ2960129`,
    backgroundImage: "/hero/home-hero.jpeg",
    imageAlt: "G&G Fugentechnik GmbH Firmengebäude und Dienstleistungen",
  };

  return (
    <>
      <Hero {...heroContent} />
      <CompanyInfo />
      <Services />
    </>
  );
};

export default Home;
