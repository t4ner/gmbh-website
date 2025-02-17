import React, { memo, useMemo } from "react";
import Logo from "/logo/logo.png";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Statik değerler ve meta bilgiler
const COMPANY_INFO = {
  name: "Gundg Fugentechnik",
  phone: "+49 (0)7253 5091 340",
  email: "info@gundg-fugentechnik.de",
  location: "https://maps.app.goo.gl/dd2NNC7Wit4ag6248",
};

const CONTACT_ITEMS = [
  {
    id: "phone",
    href: `tel:${COMPANY_INFO.phone.replace(/\s/g, "")}`,
    icon: FaPhone,
    text: COMPANY_INFO.phone,
    target: "_self",
    ariaLabel: "Contact us by phone",
  },
  {
    id: "email",
    href: `mailto:${COMPANY_INFO.email}`,
    icon: FaEnvelope,
    text: COMPANY_INFO.email,
    target: "_self",
    ariaLabel: "Contact us by email",
  },
  {
    id: "location",
    href: COMPANY_INFO.location,
    icon: FaMapMarkerAlt,
    text: "Standort finden",
    target: "_blank",
    ariaLabel: "View our location",
  },
];

const FOOTER_LINKS = [
  {
    id: "startseite",
    to: "/",
    text: "Startseite",
    ariaLabel: "Go to homepage",
  },
  {
    id: "services",
    to: "/leistungen",
    text: "Leistungen",
    ariaLabel: "Go to services page",
  },
  {
    id: "about",
    to: "/uber-uns",
    text: "Über uns",
    ariaLabel: "Go to about us page",
  },
  {
    id: "contact",
    to: "/kontakt",
    text: "Kontakt",
    ariaLabel: "Go to contact page",
  },
  {
    id: "impressum",
    to: "/impressum",
    text: "Impressum",
    ariaLabel: "Go to legal information page",
  },
  {
    id: "privacy",
    to: "/datenschutzerklarung",
    text: "Datenschutzerklärung",
    ariaLabel: "Go to privacy policy page",
  },
];

// Style sabitleri
const styles = {
  iconWrapper:
    "bg-gradient-to-r from-[#02C5DF] to-[#008FC7] p-2 md:p-4 rounded-2xl text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#02C5DF]/20",
  footerLink:
    "text-[#06234B]/60 hover:text-[#02C5DF] transition-all duration-300 text-sm flex items-center gap-2 group",
  arrowIcon:
    "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300",
  contactButton:
    "flex items-center gap-6 group p-6 rounded-3xl border border-[#02C5DF]/10 hover:border-[#02C5DF]/20 bg-gradient-to-r from-[#02C5DF]/5 to-[#008FC7]/5 hover:from-[#02C5DF]/10 hover:to-[#008FC7]/10 transition-all duration-500 hover:shadow-lg hover:shadow-[#02C5DF]/5",
};

const IconWrapper = memo(({ Icon }) => (
  <div className={styles.iconWrapper} aria-hidden="true">
    <Icon />
  </div>
));

IconWrapper.displayName = "IconWrapper";

const FooterLink = memo(({ to, children, ariaLabel }) => (
  <Link to={to} className={styles.footerLink} aria-label={ariaLabel}>
    <span>{children}</span>
    <FaArrowRight className={styles.arrowIcon} aria-hidden="true" />
  </Link>
));

FooterLink.displayName = "FooterLink";

const ContactButton = memo(({ href, icon: Icon, text, target, ariaLabel }) => (
  <a
    href={href}
    className={styles.contactButton}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    aria-label={ariaLabel}
  >
    <IconWrapper Icon={Icon} />
    <span className="text-[#06234B] text-sm md:text-base font-medium">
      {text}
    </span>
  </a>
));

ContactButton.displayName = "ContactButton";

const ContactSection = memo(() => {
  const contactButtons = useMemo(
    () =>
      CONTACT_ITEMS.map((item) => <ContactButton key={item.id} {...item} />),
    []
  );

  return (
    <nav
      className="grid max-w-6xl grid-cols-1 gap-4 mx-auto mb-16 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mb-24"
      aria-label="Contact options"
    >
      {contactButtons}
    </nav>
  );
});

ContactSection.displayName = "ContactSection";

const BottomSection = memo(() => {
  const footerLinks = useMemo(
    () =>
      FOOTER_LINKS.map((link) => (
        <FooterLink key={link.id} to={link.to} ariaLabel={link.ariaLabel}>
          {link.text}
        </FooterLink>
      )),
    []
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-[#06234B]/10">
      <div className="mb-6 md:mb-8">
        <Link to="/" aria-label={`Go to ${COMPANY_INFO.name} homepage`}>
          <img
            src={Logo}
            alt={`${COMPANY_INFO.name} Logo`}
            className="w-40 transition-opacity duration-300 hover:opacity-80"
            width="160"
            height="160"
            loading="lazy"
          />
        </Link>
      </div>

      <nav
        className="flex flex-col mt-5 md:mt-0 text-[#06234B]/60 text-sm md:text-base sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-8"
        aria-label="Footer navigation"
      >
        {footerLinks}
      </nav>
    </div>
  );
});

BottomSection.displayName = "BottomSection";

const Footer = memo(() => (
  <footer
    className="relative mt-16 md:mt-5 bg-gradient-to-b from-white to-[#f8fbfe] border-t-2 border-[#02C5DF]/30"
    role="contentinfo"
    aria-label={`${COMPANY_INFO.name} footer area`}
  >
    <div className="container relative px-4 pt-10 pb-6 mx-auto md:pt-24 md:pb-12">
      <ContactSection />
      <BottomSection />
    </div>
    <div className="text-[#06234B]/60 text-sm text-center pb-5">
      © {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.
    </div>
  </footer>
));

Footer.displayName = "Footer";

export default Footer;
