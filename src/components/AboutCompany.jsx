import React from "react";
import { FaCheck, FaHandshake, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-content"
      >
        <section className="pt-6 pb-24" id="information">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
            >
              <h2 className="text-5xl font-bold pb-6 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
                G&G Fugentechnik GmbH
              </h2>
              <p className="mx-auto text-lg text-gray-600">
                Ihr zuverlässiger Partner für Fugentechnik seit 2013
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#D6EFF6] p-12 rounded-xl shadow-lg mb-20 border border-gray-100"
            >
              <h3 className="mb-8 text-xl font-semibold text-gray-900">
                Unsere Geschichte
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Die G&G Fugentechnik GmbH wurde im Jahr 2013 von Mehmet Gök und
                Alper Güney gegründet, die beide über langjährige Erfahrung im
                Straßenbau verfügen. Ihr Fachwissen haben sie durch regelmäßige
                Schulungen und Weiterbildungen stetig erweitert. Im Jahr 2015
                wurde die Gesellschaft von einer GbR in eine GmbH umgewandelt.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Das Unternehmen versteht seine Kunden als Partner und verfolgt
                das Ziel, durch enge Zusammenarbeit und höchste
                Qualitätsstandards nachhaltigen Erfolg zu gewährleisten. Die G&G
                Fugentechnik GmbH strebt danach, ihren Kunden durch technische
                Exzellenz, Wirtschaftlichkeit und Zuverlässigkeit klare
                Wettbewerbsvorteile zu bieten. Dabei legen wir großen Wert auf
                die kontinuierliche Verbesserung unseres Serviceangebots.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
                  className="p-8 transition-shadow duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl"
                >
                  <div className="text-4xl text-[#008FC8] mb-6">
                    {principle.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="italic text-gray-600">
                Wir laden Interessierte ein, sich persönlich mit den
                Verantwortlichen in Verbindung zu setzen, um sich von der
                Qualität unserer Leistungen zu überzeugen.
              </p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default AboutCompany;
