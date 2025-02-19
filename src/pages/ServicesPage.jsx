import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import DetailServices from "../components/DetailServices";

const ServicesPage = () => {
  const heroContent = {
    title: "Leistungen der \nG&G Fugentechnik GmbH",
    subtitle: "Professionelle Lösungen für Ihre Anforderungen",
    backgroundImage: "/hero/leistungen-hero.jpg",
    imageAlt: "G&G Fugentechnik Dienstleistungen Übersicht",
  };

  const statisticsContent = {
    title: "Unsere Leistungen in Zahlen",
    description: "Qualität und Erfahrung in der professionellen Fugentechnik",
    stats: [
      {
        value: "10+",
        title: "Jahre Erfahrung",
        description: "Expertise in der Branche",
      },
      {
        value: "10000+",
        title: "Abgeschlossene Projekte",
        description: "Erfolgreiche Fugenarbeiten",
      },
      {
        value: "100%",
        title: "Kundenzufriedenheit",
        description: "Höchste Qualitätsstandards",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Hero {...heroContent} />
      <Statistics {...statisticsContent} />
      <DetailServices />
    </>
  );
};

export default ServicesPage;
