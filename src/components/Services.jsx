import React, { useState } from "react";
import homeHero from "/hero/home-hero.jpg";
import { HiArrowUpRight } from "react-icons/hi2";

const Services = () => {
  const [hasHovered, setHasHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const services = [
    {
      id: 1,
      title: "Fugenherstellung nach ZTV Fug-StB",
      description:
        "Wir erstellen Fugen nach den spezifischen Vorgaben der ZTV Fug-StB.",
    },
    {
      id: 2,
      title: "Trennschnitte in Beton und Asphalt",
      description: "Fachgerechte und präzise Durchführung von Trennschnitten.",
    },
    {
      id: 3,
      title: "Verarbeitung von Fugendichtstoffen",
      description:
        "Einsatz hochwertiger 1- und 2-Komponenten-Materialien für langlebige Dichtungen.",
    },
    {
      id: 4,
      title: "Rissesanierung im HPS-Verfahren",
      description: "Effektive Reparaturmethoden zur Sanierung von Rissen.",
    },
    {
      id: 5,
      title: "Heißnaht- und Randabdichtung",
      description:
        "Professionelle Abdichtungen, die für eine dauerhafte Stabilität sorgen.",
    },
    {
      id: 6,
      title: "Schienenfugen- und Pflasterverguss",
      description:
        "Wir gewährleisten stabile und langlebige Pflaster- und Schienenfugen.",
    },
    {
      id: 7,
      title: "Verlegung von Induktionsschleifen",
      description:
        "Präzise Installation von Induktionsschleifen zur Verkehrsregelung.",
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
            key={service.id}
            className={`group relative rounded-xl overflow-visible transition-all duration-300 border h-[150px] ${
              (!hasHovered && index === 0) || hoveredIndex === index
                ? "bg-[#008FC7]"
                : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between p-8 relative z-10 h-full">
              <div className="flex-1 max-w-xl">
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
                  className={`text-lg ${
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
              className={`absolute right-[200px] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rotate-12 overflow-hidden rounded-2xl transition-opacity duration-300 ${
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
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <button className="group flex items-center gap-2 px-8 py-4  text-black border rounded-full text-lg hover:bg-[#008FC7] transition-all duration-300">
        Einzelheiten
          <div className="w-8 h-8 rounded-full bg-[#02C5DF] flex items-center justify-center">
            <HiArrowUpRight className="w-4 h-4" color="black" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Services;
