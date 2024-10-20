import { FaInstagram, FaTwitter } from "react-icons/fa"; // Make sure to install react-icons
import { useTranslations } from "next-intl"; // Import the useTranslations hook

const Footer = () => {
  const t = useTranslations("footer"); // Use the useTranslations hook

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {t("copyright", { year: new Date().getFullYear() })}{" "}
          {/* Use the translation variable */}
        </p>
        <p className="text-sm mt-2">
          <a href="tel:+31627434800" className="hover:text-gray-300">
            {t("phone", { phone: "+31627434800" })}
          </a>{" "}
          |{" "}
          <a href="mailto:info@fluosite.com" className="hover:text-gray-300">
            {t("email", { email: "info@fluosite.com" })}
          </a>
          {/* Use translation variables */}
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://instagram.com/fluosite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/fluosite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
