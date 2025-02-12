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
    title: "Our Service Excellence in Numbers",
    description:
      "Delivering outstanding results through innovative solutions and dedicated service",
    stats: [
      {
        value: "24/7",
        title: "Support Available",
        description: "Round-the-clock technical assistance",
      },
      {
        value: "15+",
        title: "Service Types",
        description: "Comprehensive service portfolio",
      },
      {
        value: "99%",
        title: "Success Rate",
        description: "Consistently exceeding expectations",
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
