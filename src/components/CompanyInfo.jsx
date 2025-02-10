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
      icon: <FaTools className="w-8 h-8" aria-hidden="true" />,
      title: "Fugen & Rissesanierung",
      description:
        "Spezialisiert auf die Herstellung von Fugen, Trennschnitten sowie die professionelle Rissesanierung in Asphalt und Beton.",
    },
    {
      icon: <FaIndustry className="w-8 h-8" aria-hidden="true" />,
      title: "Induktionsschleifen & Dichtstoffe",
      description:
        "Innovative Lösungen für die Verlegung von Induktionsschleifen und die Verarbeitung von 1- und 2-Komponenten-Fugendichtstoffen.",
    },
    {
      icon: <FaRoad className="w-8 h-8" aria-hidden="true" />,
      title: "Fahrbahnübergänge",
      description:
        "Professionelle Randabdichtung von Fahrbahnübergängen mit modernster Technik und höchster Präzision.",
    },
    {
      icon: <FaCog className="w-8 h-8" aria-hidden="true" />,
      title: "Moderne Verfahren",
      description:
        "Einsatz bewährter und innovativer Techniken aus dem Straßenbauhandwerk.",
    },
    {
      icon: <FaAward className="w-8 h-8" aria-hidden="true" />,
      title: "Technische Standards",
      description:
        "Stets orientiert an aktuellen technischen Standards und Normen.",
    },
    {
      icon: <FaCheck className="w-8 h-8" aria-hidden="true" />,
      title: "Qualitätssicherung",
      description: "Konsequente Qualitätskontrolle bei jedem Arbeitsschritt.",
    },
  ];

  return (
    <section
      className="container mx-auto py-24 px-4"
      aria-label="Unternehmensinfo"
    >
      {/* Header */}
      <header className="text-center" data-aos="fade-down">
        <h1 className="text-4xl font-bold mb-15 text-gray-900">
          G&G Fugentechnik GmbH
        </h1>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Side - Main Image */}
        <div className="md:col-span-7" data-aos="fade-right">
          <figure className="relative rounded-3xl overflow-hidden h-[600px] bg-white shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200"
              alt="G&G Fugentechnik Firmengebäude und Arbeitsumgebung"
              className="w-full h-full object-cover"
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
        <div className="md:col-span-5 space-y-6" data-aos="fade-left">
          {/* Profile Card */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <figure className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=256&q=80"
                alt="G&G Fugentechnik Recycling Prozess"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <article className="bg-white rounded-3xl p-6 flex-grow shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                Wer sind wir?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ihr Spezialist für professionelle Fugentechnik und innovative
                Straßenbaulösungen
              </p>
            </article>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80",
                alt: "Professionelle Werkzeuge für Fugentechnik",
              },
              {
                src: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80",
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
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          {/* Quality Box */}
          <article className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Qualität als oberste Priorität
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Die Qualität unserer Dienstleistungen hat für uns höchste
              Bedeutung. Durch konsequente Qualitätssicherung stellen wir
              sicher, dass unsere Arbeit nicht nur den höchsten Ansprüchen
              genügt, sondern auch Ihre Erwartungen übertrifft.
            </p>
          </article>
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-10" aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">
          Unsere Dienstleistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-800 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="text-[#008FC8] mb-6 bg-blue-50 w-16 h-16 rounded-2xl 
                flex items-center justify-center transform transition-all duration-500 
                 group-hover:scale-110 group-hover:bg-blue-100/80"
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-4 text-gray-800 
                transition-all duration-500 ease-in-out group-hover:text-[#008FC8]"
              >
                {service.title}
              </h3>
              <p
                className="text-gray-600 leading-relaxed transition-all 
                duration-500 ease-in-out group-hover:text-gray-700"
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
