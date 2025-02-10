import React, { useState } from "react";
import homeHero from "/hero/home-hero.jpg";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Services = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const services = [
    {
      id: 1,
      title: "Fugenherstellung nach ZTV Fug-StB",
      description:
        "Wir führen Fugenarbeiten gemäß ZTV Fug-StB fachgerecht und präzise aus. Dank unserer sorgfältigen Arbeitsweise gewährleisten wir eine langlebige Abdichtung, die zuverlässig vor Feuchtigkeit, Temperaturschwankungen und daraus resultierenden Schäden schützt",
    },
    {
      id: 2,
      title: "Trennschnitte in Beton und Asphalt",
      description:
        "Wir führen präzise Trennschnitte in Beton und Asphalt aus. Unsere fachgerechte Arbeitsweise sorgt für saubere Schnittkanten und minimiert Spannungsrisse, um die Langlebigkeit und Stabilität der Bauwerke zu gewährleisten",
    },
    {
      id: 3,
      title: "Verarbeitung von 1- und 2-K Fugendichtstoffen",
      description:
        "Wir verarbeiten hochwertige 1- und 2-komponentige Fugendichtstoffe fachgerecht und präzise. Unsere professionelle Anwendung sorgt für eine dauerhafte, elastische Abdichtung, die optimalen Schutz vor Feuchtigkeit, Temperaturschwankungen und mechanischer Belastung bietet",
    },
    {
      id: 4,
      title: "Rissesanierung im HPS-Verfahren",
      description:
        "Wir führen Rissesanierungen im HPS-Verfahren fachgerecht und effizient durch. Diese Methode sorgt für eine nachhaltige Versiegelung von Rissen, verhindert das Eindringen von Feuchtigkeit und trägt zur langfristigen Erhaltung der Bausubstanz bei.",
    },
    {
      id: 5,
      title: "Heißnaht- und Randabdichtung",
      description:
        "Wir bieten professionelle Heißnaht- und Randabdichtungen an. Diese Verfahren sorgen für eine sichere, langlebige Versiegelung, schützen vor Feuchtigkeitseintritt und erhöhen die Widerstandsfähigkeit von Bauwerken gegen Witterungseinflüsse und mechanische Belastungen.",
    },
    {
      id: 6,
      title: "Schienenfugen- und Pflasterverguss",
      description:
        "Wir führen Schienenfugen- und Pflasterverguss fachgerecht und präzise aus. Diese Verfahren gewährleisten eine dauerhafte Abdichtung, schützen vor Feuchtigkeit und verhindern Schäden durch Temperaturschwankungen sowie mechanische Belastungen",
    },
    {
      id: 7,
      title: "Verlegung von Induktionsschleifen",
      description:
        "Wir verlegen Induktionsschleifen präzise und fachgerecht. Diese ermöglichen eine zuverlässige Signalübertragung für Verkehrssteuerungssysteme, Schrankenanlagen und Parkleitsysteme und sorgen für eine effiziente und langlebige Funktion",
    },
  ];

  const handleMouseEnter = (index) => {
    setHasHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="w-full container mx-auto pb-24">
      <h1 className="text-4xl font-bold mb-15 text-gray-900 text-center">
        Unsere Leistungen im Überblick
      </h1>

      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="service-card"
          >
            <Link to="/leistungen" key={service.id}>
              <div
                className={`group relative rounded-xl overflow-visible transition-all duration-300 border h-[200px] ${
                  (!hasHovered && index === 0) || hoveredIndex === index
                    ? "bg-[#008FC7]"
                    : ""
                } hover:cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center justify-between p-6 relative z-10 h-full">
                  <div className="flex-1 max-w-2xl">
                    <h2
                      className={`text-xl font-semibold mb-4 ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "text-white"
                          : ""
                      }`}
                    >
                      {service.title}
                    </h2>
                    <p
                      className={` ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        (!hasHovered && index === 0) || hoveredIndex === index
                          ? "border-white bg-[##02C5DF]"
                          : "border-black"
                      }`}
                    >
                      <HiArrowUpRight
                        className="w-6 h-6"
                        color={
                          (!hasHovered && index === 0) || hoveredIndex === index
                            ? "black"
                            : "currentColor"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute right-[200px] top-1/2 -translate-y-1/2 w-[350px] h-[250px] rotate-12 overflow-hidden rounded-2xl transition-opacity duration-300 ${
                    (!hasHovered && index === 0) || hoveredIndex === index
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  <img
                    src={homeHero}
                    alt={service.title}
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/leistungen"
          className="group flex items-center gap-2 px-8 py-4 text-black border rounded-full text-lg hover:bg-[#008FC7] hover:text-white transition-all duration-300"
        >
          Einzelheiten
          <div className="w-8 h-8 rounded-full bg-[#02C5DF] flex items-center justify-center">
            <HiArrowUpRight className="w-4 h-4" color="black" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
