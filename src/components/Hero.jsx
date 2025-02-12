import React, { useEffect, useCallback } from "react";
import Navbar from "./Navbar";
// Resmi import etmek yerine public klasöründen kullanacağız
// import herohome from "/hero/home-hero.jpg";

const Hero = ({
  title,
  subtitle,
  backgroundImage = "/hero/home-hero.jpg",
  imageAlt,
}) => {
  // useCallback ile scroll handler'ı optimize ediyoruz
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element) => {
      const speed = element.dataset.speed || 0.5;
      const yPos = scrolled * speed;
      // Transform yerine translate3d kullanarak GPU hızlandırması
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }, []);

  useEffect(() => {
    // Performans için passive event listener kullanıyoruz
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      aria-label="Hero Section"
    >
      <Navbar />

      {/* Arka plan optimizasyonu */}
      <div className="absolute inset-0 h-screen w-screen z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover scale-105 parallax"
          data-speed="0.2"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
          decoding="async"
        />
      </div>

      {/* Animasyonlu şekiller - will-change özelliği eklendi */}
      <div className="absolute inset-0 z-5">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-[#02C5DF]/10 rounded-full blur-3xl animate-pulse"
          style={{ willChange: "opacity" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-[#008FC7]/10 rounded-full blur-3xl animate-pulse delay-700"
          style={{ willChange: "opacity" }}
        ></div>
      </div>

      {/* Hero içeriği - Semantic HTML ve ARIA etiketleri eklendi */}
      <div className="relative z-10 container mx-auto px-4 h-[calc(100vh-80px)] flex items-center pt-44">
        <div className="max-w-4xl">
          <h1
            className="text-6xl font-bold text-white mb-6 leading-tight animate-fade-in"
            aria-label={title}
          >
            {title.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {i === title.split("\n").length - 1 ? (
                  <span className="bg-gradient-to-r from-[#02C5DF] to-[#008FC7] text-transparent bg-clip-text">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-slide-up">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Scroll indicator - Erişilebilirlik iyileştirmesi */}
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hover:scale-110 transition-transform duration-300"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        aria-label="Nach unten scrollen"
      >
        <div className="w-8 h-14 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-bounce"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
