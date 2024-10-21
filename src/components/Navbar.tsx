"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import icons
import logo from "../images/fluosite_logo.png";
import LanguageSwitcher from "./LanguageSwitcher"; // Import the LanguageSwitcher component
import { useTranslations } from "next-intl"; // Import the useTranslations hook
import { Button } from "./ui/button";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const t = useTranslations("navbar"); // Use the useTranslations hook
  const [isOpen, setIsOpen] = useState(false);
  const navbarHeight = 72; // Set this to your navbar's height in pixels
  const navbarHeightPhone = 64.8; // Set this to your navbar's height in pixels

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 transition duration-150 z-20 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true} // Enable smooth scrolling
          duration={500} // Duration of scroll in milliseconds
          offset={-navbarHeight} // Adjust for navbar height
          className="text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
        >
          <Image src={logo.src} width={100} height={100} alt="FluoSite Logo" />
        </ScrollLink>
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-4 items-center">
            <li>
              <ScrollLink
                to="home"
                smooth={true} // Enable smooth scrolling
                duration={500} // Duration of scroll in milliseconds
                offset={-navbarHeight} // Adjust for navbar height
                className="text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
              >
                {t("home")} {/* Use translation for Home */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Adjust for navbar height
                className="text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
              >
                {t("portfolio")} {/* Use translation for Services */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="process"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Adjust for navbar height
                className="text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
              >
                {t("process")} {/* Use translation for Contact */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="consultation"
                smooth={true}
                duration={500}
                offset={-navbarHeight} // Adjust for navbar height
                onClick={toggleMenu}
              >
                <Button className="md:mx-4">
                  <FaPhoneAlt />
                  {t("freeKickstart")}{" "}
                  {/* Use translation for Free Kickstart */}
                </Button>
              </ScrollLink>
            </li>
          </ul>
          {/* Language Switcher */}
          <LanguageSwitcher />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none ml-4"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars} // Toggle icon based on isOpen state
              className={`transition-transform duration-150 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`} // Animation on click
              size="2x" // Change size as needed
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 sticky">
          <ul className="flex flex-col space-y-5 mx-2">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                offset={-navbarHeightPhone} // Adjust for navbar height
                className="block text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
                onClick={toggleMenu}
              >
                {t("home")} {/* Use translation for Home */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-navbarHeightPhone} // Adjust for navbar height
                className="block text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
                onClick={toggleMenu}
              >
                {t("portfolio")} {/* Use translation for Services */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="process"
                smooth={true}
                duration={500}
                offset={-navbarHeightPhone} // Adjust for navbar height
                className="block text-white hover:text-primary transition ease-in-out delay-150 cursor-pointer"
                onClick={toggleMenu}
              >
                {t("process")} {/* Use translation for Contact */}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="consultation"
                smooth={true}
                duration={500}
                offset={-navbarHeightPhone} // Adjust for navbar height
                onClick={toggleMenu}
              >
                <Button>
                  <FaPhoneAlt />
                  {t("freeKickstart")}
                </Button>
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
