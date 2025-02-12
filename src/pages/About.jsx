import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Navbar from "../components/Navbar";
import AboutCompany from "../components/AboutCompany";
import EmployeeCard from "../components/EmployeeCard";
const About = () => {
  const heroContent = {
    title: "Über\nUns",
    subtitle: "Erfahrung und Kompetenz seit Jahren",
    backgroundImage: "/hero/about-hero.jpg",
    imageAlt: "G&G Fugentechnik Team und Unternehmen",
  };

  const statisticsContent = {
    title: "Your Trusted Partner in Industrial Growth",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    stats: [
      {
        value: "300+",
        title: "Completed Projects",
        description: "Successfully delivered projects across industries",
      },
      {
        value: "90+",
        title: "Expert Team",
        description: "Skilled professionals at your service",
      },
      {
        value: "12K",
        title: "Happy Clients",
        description: "Satisfied customers worldwide",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Hero {...heroContent} />
      <Statistics {...statisticsContent} />
      <AboutCompany />
      <EmployeeCard />
    </>
  );
};

export default About;
