import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Hero from "../components/Hero";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ukiun8l", "template_z809tfd", form.current, {
        publicKey: "PTCU4WX568fR4ym8L",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("E-Mail erfolgreich gesendet!");
        },
        (error) => {
          toast.error("Beim Senden der E-Mail ist ein Fehler aufgetreten!");
        }
      );
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const heroContent = {
    title: "Kontakt zur \nG&G Fugentechnik GmbH",
    subtitle: "Fragen zu unseren Leistungen? Kontaktieren Sie uns!",
    backgroundImage: "/hero/contact-hero.jpg",
    imageAlt: "G&G Fugentechnik Team und Unternehmen",
  };

  return (
    <div className="w-full min-h-scree0">
      {/* Hero Section with 3D Effect */}
      <Hero {...heroContent} />

      {/* Stats/Contact Info Section */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 -mt-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {[
            {
              icon: <FaMapMarkerAlt className="w-6 h-6" />,
              title: "Adresse",
              value: (
                <>
                  G&G Fugentechnik GmbH
                  <br />
                  Südendstraße 7/1,
                  <br />
                  76709 Kronau
                </>
              ),
              link: "https://maps.app.goo.gl/GsX4i2fXnqiB54ys5",
              color: "from-[#7BE4F0] to-[#02C5DF]",
              hoverColor: "hover:from-[#6ad3de] hover:to-[#02b3cc]",
            },
            {
              icon: <FaPhone className="w-6 h-6" />,
              title: "Telefon",
              value: "+49 (0)7253 5091 340",
              link: "tel:+4972535091340",
              color: "from-[#02C5DF] to-[#02A7C7]",
              hoverColor: "hover:from-[#02b3cc] hover:to-[#0295b2]",
            },
            {
              icon: <FaEnvelope className="w-6 h-6" />,
              title: "E-Mail",
              value: "info@gundg-fugentechnik.de",
              link: "mailto:info@gundg-fugentechnik.de",
              color: "from-[#02A7C7] to-[#008FC7]",
              hoverColor: "hover:from-[#0295b2] hover:to-[#007eb3]",
            },
            {
              icon: <FaClock className="w-6 h-6" />,
              title: "Bürozeiten",
              value: (
                <>
                  Montag bis Freitag: 8:00 - 16:30 Uhr
                  <br />
                  Samstag, Sonntag und an Feiertagen: geschlossen
                  <br />
                  <span className="text-sm italic">
                    Oder nach vorheriger Terminvereinbarung
                  </span>
                </>
              ),
              color: "from-[#008FC7] to-[#0076AB]",
              hoverColor: "hover:from-[#007eb3] hover:to-[#006796]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="block cursor-pointer"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl h-[380px] flex flex-col">
                    <div
                      className={`bg-gradient-to-r ${item.color} ${item.hoverColor} p-8 text-white transition-all duration-300 flex-1 flex flex-col justify-between`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm  transition-transform duration-300">
                          {React.cloneElement(item.icon, {
                            className: "w-8 h-8",
                          })}
                        </div>
                        <span className="text-4xl font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mt-auto">
                        <h3 className="text-2xl font-semibold mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg opacity-90 leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300  hover:shadow-2xl h-[380px] flex flex-col">
                  <div
                    className={`bg-gradient-to-r ${item.color} ${item.hoverColor} p-8 text-white transition-all duration-300 flex-1 flex flex-col justify-between`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm  transition-transform duration-300">
                        {React.cloneElement(item.icon, {
                          className: "w-8 h-8",
                        })}
                      </div>
                      <span className="text-4xl font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-auto">
                      <h3 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg opacity-90 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto pt-24">
        <ToastContainer />
        <div className="px-4 py-8 mb-20 md:px-6 lg:px-8">
          <div className="mx-auto">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col lg:flex-row border border-[#02C5DF] shadow-3xl rounded-xl overflow-hidden bg-white transition-transform  duration-300 ease-in-out"
            >
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.479675928826!2d8.626844499999999!3d49.2104295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bd87b327fc9b%3A0x88814e4334e9b77c!2sG%C3%B6k%20%26%20G%C3%BCney%20Fugentechnik%20GmbH!5e0!3m2!1sen!2str!4v1738857777383!5m2!1sen!2str"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="w-full p-6 lg:w-1/2 md:p-8">
                <h2 className="text-xl md:text-3xl font-medium bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-transparent bg-clip-text mb-6 md:mb-8">
                  Kontaktieren Sie uns!
                </h2>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      required
                      name="user_name"
                      placeholder="Ihr Name"
                      className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                    />
                    <input
                      type="email"
                      required
                      name="user_email"
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    name="user_telephone"
                    placeholder="Ihre Telefonnummer"
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300"
                  />
                  <textarea
                    required
                    name="message"
                    placeholder="Ihre Nachricht..."
                    className="w-full px-3 py-2 text-xs md:text-base rounded-md border border-gray-300 focus:border-[#008FC7] focus:ring-1 focus:ring-[#008FC7] outline-none transition-all duration-300 min-h-[150px] md:min-h-[200px] resize-y"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-[#02C5DF] to-[#008FC7]  text-xs md:text-base text-white rounded-md font-medium hover:bg-[#0076AB] transition-all duration-300 transform "
                    >
                      Schicken
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
