import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";
import AboutCompany from "../components/AboutCompany";
import EmployeeCard from "../components/EmployeeCard";

const About = () => {
  const heroContent = {
    title: "Über die \nG&G Fugentechnik GmbH",
    subtitle: "Erfahrung und Kompetenz seit Jahren",
    backgroundImage: "/hero/uber-uns-hero.jpg",
    imageAlt: "G&G Fugentechnik Team und Unternehmen",
  };

  const statisticsContent = {
    title: "G&G Fugentechnik GmbH - Ihre Vorteile",
    description:
      "Technische Exzellenz, Wirtschaftlichkeit und Zuverlässigkeit für Ihren Wettbewerbsvorteil",
    stats: [
      {
        value: "100%",
        title: "Technische Exzellenz",
        description: "Modernste Technologie und Fachkompetenz",
      },
      {
        value: "24/7",
        title: "Zuverlässigkeit",
        description: "Termintreue und flexible Einsatzbereitschaft",
      },
      {
        value: "Top",
        title: "Preis-Leistung",
        description: "Optimales Kosten-Nutzen-Verhältnis",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <Hero {...heroContent} />
      <div data-aos="fade-up" data-aos-delay="100">
        <Statistics {...statisticsContent} />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <AboutCompany />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <EmployeeCard />
      </div>
    </>
  );
};

export default About;
