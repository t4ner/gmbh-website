import React, { memo, useMemo } from "react";
import Logo from "/logo/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Statik değerler component dışında tanımlanıyor
const CONTACT_ITEMS = [
  {
    id: "phone",
    href: "tel:+4972535091340",
    icon: FaPhone,
    text: "+49 (0)7253 5091 340",
    target: "_self",
  },
  {
    id: "email",
    href: "mailto:info@gundg-fugentechnik.de",
    icon: FaEnvelope,
    text: "info@gundg-fugentechnik.de",
    target: "_self",
  },
  {
    id: "location",
    href: "https://maps.app.goo.gl/dd2NNC7Wit4ag6248",
    icon: FaMapMarkerAlt,
    text: "Standort finden",
    target: "_blank",
  },
];

const FOOTER_LINKS = [
  { id: "impressum", to: "/impressum", text: "Impressum" },
  { id: "privacy", to: "/datenschutzerklarung", text: "Datenschutzerklärung" },
];

const CURRENT_YEAR = new Date().getFullYear();

// Style sabitleri
const ICON_WRAPPER_STYLES =
  "bg-gradient-to-br from-[#008FC8] to-[#006a96] p-2 md:p-4 rounded-2xl text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#008FC8]/20";
const FOOTER_LINK_STYLES =
  "text-[#06234B]/60 hover:text-[#008FC8] transition-all duration-300 text-sm flex items-center gap-2 group";
const ARROW_ICON_STYLES =
  "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300";
const CONTACT_BUTTON_STYLES =
  "flex items-center gap-6 group p-6 rounded-3xl border border-[#008FC8]/10 hover:border-[#008FC8]/20 bg-gradient-to-br from-[#008FC8]/5 to-transparent hover:from-[#008FC8]/10 transition-all duration-500 hover:shadow-lg hover:shadow-[#008FC8]/5";

const IconWrapper = memo(({ Icon }) => (
  <div className={ICON_WRAPPER_STYLES} aria-hidden="true">
    <Icon />
  </div>
));

const FooterLink = memo(({ to, children }) => (
  <Link to={to} className={FOOTER_LINK_STYLES} aria-label={`${children}`}>
    <span>{children}</span>
    <FaArrowRight className={ARROW_ICON_STYLES} aria-hidden="true" />
  </Link>
));

const ContactButton = memo(({ href, icon: Icon, text, target }) => (
  <a
    href={href}
    className={CONTACT_BUTTON_STYLES}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    aria-label={`Bize ulaşın: ${text}`}
  >
    <IconWrapper Icon={Icon} />
    <span className="text-[#06234B] text-sm md:text-base font-medium">
      {text}
    </span>
  </a>
));

const ContactSection = memo(() => (
  <nav
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-16 md:mb-24"
    aria-label="İletişim seçenekleri"
  >
    {useMemo(
      () =>
        CONTACT_ITEMS.map((item) => <ContactButton key={item.id} {...item} />),
      []
    )}
  </nav>
));

const BottomSection = memo(() => {
  const footerLinks = useMemo(
    () =>
      FOOTER_LINKS.map((link) => (
        <FooterLink key={link.id} to={link.to}>
          {link.text}
        </FooterLink>
      )),
    []
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-[#06234B]/10">
      <div className="mb-6 md:mb-8">
        <Link to="/" aria-label="Ana sayfaya git">
          <img
            src={Logo}
            alt="Macaree Logo"
            className="w-14 md:w-32 hover:opacity-80 transition-opacity duration-300"
            loading="lazy"
          />
        </Link>
      </div>

      <nav
        className="flex flex-col mt-5 md:mt-0 text-[#06234B]/60 text-sm md:text-base sm:flex-row items-center gap-4 sm:gap-8 md:gap-12 mb-6 md:mb-8"
        aria-label="Footer navigasyon"
      >
        {footerLinks}
      </nav>
    </div>
  );
});

const Footer = memo(() => (
  <footer
    className="relative mt-16 md:mt-5 bg-gradient-to-b from-white to-[#f8fbfe] border-t-2 border-[#008FC8]/30"
    role="contentinfo"
  >
    <div className="relative container px-4 mx-auto pt-10 md:pt-24 pb-6 md:pb-12">
      <ContactSection />
      <BottomSection />
    </div>
    <div className="text-[#06234B]/60 text-sm text-center pb-5">
      © {CURRENT_YEAR} Macaree. Alle Rechte vorbehalten.
    </div>
  </footer>
));

export default Footer;
