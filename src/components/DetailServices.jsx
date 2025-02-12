import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const DetailServices = () => {
  const location = useLocation();
  const selectedServiceId = location.state?.selectedService;

  // Her servis için bir ref oluşturun
  const serviceRefs = useRef({});

  useEffect(() => {
    // ID'den 1 çıkararak doğru index'e ulaşıyoruz
    const index = selectedServiceId - 1;
    if (selectedServiceId && serviceRefs.current[index]) {
      // Sayfa yüklendiğinde scroll yapabilmek için küçük bir gecikme ekliyoruz
      setTimeout(() => {
        serviceRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [selectedServiceId]);

  const services = [
    {
      title: "Fugenherstellung nach ZTV Fug-StB",
      description: `Wir stellen wasserdichte Anschlussfugen zwischen Beton, Gussasphalt und
Walzasphalt fachgerecht her. Dabei erfolgt das präzise Aufschneiden und
gleichzeitige Absaugen des Schneidstaubs in einem Arbeitsgang mithilfe
hochmoderner Schneidstaubabsaugmaschinen.
Für eine dauerhafte und belastbare Abdichtung werden die Fugen entlang von
Brücken und Verkehrsflächen mit heiß verarbeiteter Fugenvergussmasse
verfüllt. Dies gewährleistet eine zuverlässige Verbindung zwischen
Gussasphalt, Walz- und Betonbelägen.
Dank der elastischen Eigenschaften der Fugen werden auftretende
Bewegungen optimal aufgenommen. Dadurch wird das Eindringen von
Feuchtigkeit und Tausa`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Lüks Havuz",
      align: "left",
    },
    {
      title: "Trennschnitte in Beton und Asphalt",
      description: `Wir führen präzise Trennschnitte in Asphalt und Beton bis zu einer Tiefe von 40
cm aus. Dank moderner Schneidtechnik erzielen wir saubere Schnittkanten,
minimieren Spannungsrisse und gewährleisten eine materialschonende
Bearbeitung.
Auf Wunsch übernehmen wir auch die fachgerechte Vormarkierung des
Sägeschnitts gemäß Ihren Plänen oder Vorgaben, um eine exakte und effiziente
Umsetzung sicherzustellen. Unsere präzise Arbeitsweise sorgt für eine
optimale Vorbereitung von Baumaßnahmen, wie dem Einbau von
Dehnungsfugen, Induktionsschleifen oder Sanierungsarbeiten an Straßen und
Verkehrsflächen`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Verarbeitung von 1- und 2-K Fugendichtstoffen",
      description: `Für die zuverlässige Abdichtung von Bewegungs- und Anschlussfugen verwenden wir hochwertige 1- und 2-komponentige Fugendichtstoffe. Diese bieten eine dauerhafte, elastische Versiegelung und schützen vor Feuchtigkeit, Temperaturschwankungen und mechanischen Belastungen. Unsere Anwendungen umfassen:
● Bewegungsfugen in Beton, Mauerwerk und Kunststein, besonders in LAU-Anlagen.
● Anschlussfugenabdichtungen für Zargen aus Holz, Glas, Metall oder Kunststoff.
● Fugensanierungen zur Erneuerung und langfristigen Schadensvermeidung.
Mit unserer fachgerechten Verarbeitung gewährleisten wir beständige und belastbare Fugenlösungen.`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
    {
      title: "Rissesanierung im HPS-Verfahren",
      description: `Die Rissesanierung im Heißpress-Stoßverfahren (HPS-Verfahren) ist eine effektive Methode zur dauerhaften Instandsetzung von Rissen in Asphalt- und Betonflächen. Durch heiß verarbeitete Vergussmasse wird unter Druck eine kraftschlüssige Verbindung hergestellt, die Feuchtigkeit, Tausalze und Schmutz abhält. Vorteile der HPS-Rissesanierung: ✔ Langlebige Abdichtung, ✔ Flexibilität zur Anpassung an Bewegungen, ✔ Effiziente Verarbeitung für minimale Verkehrsbehinderungen, ✔ Verbesserte Verkehrssicherheit. Diese Methode eignet sich besonders für Straßen, Brücken und Parkplätze.`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Heißnaht und Randabdichtung",
      description: `Die Heißnaht- und Randabdichtung sorgt für die langfristige Versiegelung von Fugen und Schnittkanten in Asphalt- und Betonflächen. Durch heiß verarbeitete Vergussmasse wird eine dauerhafte Verbindung geschaffen, die Feuchtigkeit, Tausalzen und Verkehrsbelastungen standhält. Einsatzbereiche: ✔ Heißnahtabdichtung – Verbindung von Asphalt- und Betonflächen, besonders an Nahtstellen. ✔ Randabdichtung – Schutz freiliegender Kanten vor Wasser und Schmutz. Vorteile: Langlebiger Schutz, hohe Belastbarkeit und optimierte Haltbarkeit. Mit unserer präzisen Ausführung sichern wir die Lebensdauer von Verkehrsflächen.`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
    {
      title: "Schienenfugen- und Pflasterverguss",
      description: `Der Schienenfugen- und Pflasterverguss sorgt für die Abdichtung und Stabilisierung von Fugen in Gleisanlagen, Pflasterflächen und Verkehrswegen. Durch elastische Vergussmassen wird eine sichere Verbindung geschaffen, die vor Feuchtigkeit, Schmutz und Belastung schützt. Einsatzbereiche: ✔ Schienenfugenverguss – schützt vor Wasser, Schmutz, reduziert Schwingungen und Lärm. ✔ Pflasterverguss – sorgt für stabile Pflasterbeläge in Verkehrsflächen und Gehwegen. Vorteile: Langlebige Abdichtung, hohe Elastizität und erhöhte Verkehrssicherheit.`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "right",
    },
    {
      title: "Verlegung von Induktionsschleifen",
      description: ` Die fachgerechte Verlegung von Induktionsschleifen ist entscheidend für die Funktion von Verkehrsleitsystemen, Schrankenanlagen, Parkleitsystemen und Ampelanlagen. Durch präzise Fräsarbeiten und den sorgfältigen Einbau gewährleisten wir optimale Signalübertragung und Langlebigkeit. Ablauf: 1. Exakte Fräsung der Schlitze. 2. Einlegen und Fixieren der Schleifen. 3. Verguss zum Schutz vor Witterung und Belastung. 4. Anschluss und Funktionsprüfung. Vorteile: Hohe Signalqualität, Langlebigkeit und präzise Ausführung für effiziente Verkehrssteuerung.`,
      image: "/hero/home-hero.jpg",
      imageAlt: "Havuz Bakımı",
      align: "left",
    },
  ];

  return (
    <div className="w-full min-h-screen py-24">
      <header className="text-center" data-aos="fade-down">
        <h1 className="text-5xl font-bold pb-6 mb-10 bg-gradient-to-r from-[#02C5DF] to-[#008FC7] bg-clip-text text-transparent">
          G&G Fugentechnik GmbH
        </h1>
      </header>
      <div className="space-y-32">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className={`flex flex-col group ${
              service.align === "right"
                ? "md:flex-row-reverse rounded-l-[3rem] ml-auto"
                : "md:flex-row rounded-r-[3rem] mr-auto"
            } overflow-hidden w-[1500px] h-[500px] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transform hover:-translate-y-3 transition-all duration-700 ease-out`}
          >
            <div className="w-full md:w-2/3 relative h-[600px] overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-700"></div>
            </div>
            <div className="w-full md:w-3/4 bg-gradient-to-br from-[#02C5DF] to-[#008FC7] text-white p-12 flex flex-col justify-center relative overflow-hidden backdrop-blur-sm group-hover:from-[#008FC7] group-hover:to-[#02C5DF] transition-all duration-700">
              <div className="relative z-10">
                <span className="block w-24 h-0.5 bg-white/60 mb-8 transform origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"></span>
                <h2 className="text-3xl font-semibold mb-8 transform transition-all duration-500 group-hover:translate-x-2">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-100 transform transition-all duration-500 group-hover:translate-x-2 opacity-90">
                  {service.description}
                </p>
              </div>

              {/* Modern dekoratif elementler */}
              <div className="absolute right-0 bottom-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mb-48 blur-3xl group-hover:bg-white/15 transition-all duration-700"></div>
              <div className="absolute left-0 top-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mt-24 blur-2xl group-hover:bg-white/15 transition-all duration-700"></div>

              {/* Modern animasyonlu çizgiler */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1500 ease-in-out"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailServices;
