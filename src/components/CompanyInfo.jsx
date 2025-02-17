import React, { useEffect } from "react";
import {
  FaCheck,
  FaCog,
  FaTools,
  FaRoad,
  FaIndustry,
  FaAward,
} from "react-icons/fa";
import AOS from "aos";

const CompanyInfo = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  // SEO ve erişilebilirlik için yapılandırılmış servis verileri
  const services = [
    {
      icon: <FaTools className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Fugen & Rissesanierung",
      description:
        "Spezialisiert auf die Herstellung von Fugen, Trennschnitten sowie die professionelle Rissesanierung in Asphalt und Beton.",
    },
    {
      icon: <FaIndustry className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Induktionsschleifen & Dichtstoffe",
      description:
        "Innovative Lösungen für die Verlegung von Induktionsschleifen und die Verarbeitung von 1- und 2-Komponenten-Fugendichtstoffen.",
    },
    {
      icon: <FaRoad className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Fahrbahnübergänge",
      description:
        "Professionelle Randabdichtung von Fahrbahnübergängen mit modernster Technik und höchster Präzision.",
    },
    {
      icon: <FaCog className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Moderne Verfahren",
      description:
        "Einsatz bewährter und innovativer Techniken aus dem Straßenbauhandwerk.",
    },
    {
      icon: <FaAward className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Technische Standards",
      description:
        "Stets orientiert an aktuellen technischen Standards und Normen.",
    },
    {
      icon: <FaCheck className="w-6 h-6 md:h-8 md:w-8" aria-hidden="true" />,
      title: "Qualitätssicherung",
      description: "Konsequente Qualitätskontrolle bei jedem Arbeitsschritt.",
    },
  ];

  return (
    <section
      className="container px-4 py-12 mx-auto md:py-24"
      aria-label="Unternehmensinfo"
    >
      {/* Header */}
      <header className="text-center" data-aos="fade-down">
        <h1 className=" text-2xl md:text-5xl  md:pb-10 font-bold mb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
          G&G Fugentechnik GmbH
        </h1>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Left Side - Main Image */}
        <div className="md:col-span-7" data-aos="fade-right">
          <figure className="relative rounded-3xl overflow-hidden h-[350px] md:h-[650px] bg-white shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
            <img
              src="/information/info1.webp"
              alt="G&G Fugentechnik Firmengebäude und Arbeitsumgebung"
              className="object-cover w-full h-full"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              aria-hidden="true"
            ></div>
          </figure>
        </div>

        {/* Right Side Content */}
        <div
          className="flex flex-col h-full md:col-span-5"
          data-aos="fade-left"
        >
          <div className="flex flex-col h-full space-y-6">
            {/* Profile Card */}
            <div className="flex flex-col items-start gap-6 md:flex-row">
              <figure className="flex-shrink-0 w-24 h-24 p-6 overflow-hidden border border-white rounded-full shadow-xl md:h-32 md:w-32">
                <img
                  src="logo/logo2.png"
                  alt="G&G Fugentechnik Recycling Prozess"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <article className="flex-grow p-6 transition-shadow duration-300 bg-white shadow-xl rounded-3xl hover:shadow-2xl">
                <h2 className="mb-3 text-lg font-semibold text-gray-800 md:text-xl">
                  Wer sind wir?
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 md:text-lg">
                  Ihr Spezialist für professionelle Fugentechnik und innovative
                  Straßenbaulösungen
                </p>
              </article>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/information/info3.jpg",
                  alt: "Professionelle Werkzeuge für Fugentechnik",
                },
                {
                  src: "/information/info2.jpg",
                  alt: "Nachhaltige Baupraktiken bei G&G Fugentechnik",
                },
              ].map((img, index) => (
                <figure
                  key={index}
                  className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-48 transform hover:scale-[1.02]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>

            {/* Quality Box */}
            <article className="flex-grow p-8 transition-all duration-300 bg-white shadow-xl rounded-3xl hover:shadow-2xl">
              <h2 className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">
                Qualität als oberste Priorität
              </h2>
              <p className="text-sm leading-relaxed text-gray-600 md:text-lg">
                Die Qualität unserer Dienstleistungen hat für uns höchste
                Bedeutung. Durch konsequente Qualitätssicherung stellen wir
                sicher, dass unsere Arbeit nicht nur den höchsten Ansprüchen
                genügt, sondern auch Ihre Erwartungen übertrifft.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-10" aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">
          Unsere Dienstleistungen
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={index}
              className="p-8 transition-shadow bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl duration-800"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="text-[#008FC7] mb-6 bg-[#D6EFF6] w-12 h-12 md:w-16 md:h-16 rounded-2xl 
                flex items-center justify-center transform transition-all duration-500 
                 group-hover:scale-110 group-hover:bg-blue-100/80"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3
                className="text-lg md:text-xl font-semibold mb-4 text-gray-800 
                transition-all duration-500 ease-in-out group-hover:text-[#008FC8]"
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-gray-600 transition-all duration-500 ease-in-out md:text-lg group-hover:text-gray-700"
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CompanyInfo;
