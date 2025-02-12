import React from "react";
import { FaCheck, FaHandshake, FaChartLine } from "react-icons/fa";

const AboutCompany = () => {
  const principles = [
    {
      icon: <FaCheck />,
      title: "Höchste Standards",
      description:
        "Höchste Qualitätsstandards und termingerechte Ausführung der Aufträge",
    },
    {
      icon: <FaHandshake />,
      title: "Preis-Leistung",
      description: "Optimale Preis-Leistungs-Verhältnisse",
    },
    {
      icon: <FaChartLine />,
      title: "Weiterentwicklung",
      description:
        "Ständige Weiterentwicklung und Verbesserung unseres Serviceangebots",
    },
  ];

  return (
    <section className="pb-24 pt-6" id="information">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold pb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
            G&G Fugentechnik GmbH
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Ihr zuverlässiger Partner für Fugentechnik seit 2013
          </p>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-lg mb-20 border border-gray-100">
          <h3 className="text-xl font-semibold mb-8 text-gray-900">
            Unsere Geschichte
          </h3>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Die G&G Fugentechnik GmbH wurde im Jahr 2013 von Mehmet Gök und
            Alper Güney gegründet, die beide über langjährige Erfahrung im
            Straßenbau verfügen. Ihr Fachwissen haben sie durch regelmäßige
            Schulungen und Weiterbildungen stetig erweitert. Im Jahr 2015 wurde
            die Gesellschaft von einer GbR in eine GmbH umgewandelt.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Das Unternehmen versteht seine Kunden als Partner und verfolgt das
            Ziel, durch enge Zusammenarbeit und höchste Qualitätsstandards
            nachhaltigen Erfolg zu gewährleisten. Die G&G Fugentechnik GmbH
            strebt danach, ihren Kunden durch technische Exzellenz,
            Wirtschaftlichkeit und Zuverlässigkeit klare Wettbewerbsvorteile zu
            bieten. Dabei legen wir großen Wert auf die kontinuierliche
            Verbesserung unseres Serviceangebots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl text-[#008FC8] mb-6">
                {principle.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {principle.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            Wir laden Interessierte ein, sich persönlich mit den
            Verantwortlichen in Verbindung zu setzen, um sich von der Qualität
            unserer Leistungen zu überzeugen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
