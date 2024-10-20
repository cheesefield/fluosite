"use client";

import { usePathname, Link } from "@/navigation"; // Importing usePathname for path management
import { locales } from "../config"; // Import your locales configuration
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { FaGlobe } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const pathname = usePathname() || ""; // Ensure pathname is a string
  const currentLocale = pathname.split("/")[1] || "en"; // Default to 'en' if no locale found
  const pagePath = pathname.replace(`/${currentLocale}`, ""); // Get the page path without the locale

  const getCountryCode = (locale: string) => {
    switch (locale) {
      case "en":
        return "GB"; // United Kingdom flag
      case "cs":
        return "CZ"; // Czech Republic flag
      case "pl":
        return "PL"; // Poland flag
      default:
        return "GB"; // Default flag
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <FaGlobe className="size-7 mx-2 hover:text-gray-400 text-gray-100 transition-all duration-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-800 text-white min-w-full">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            className="text-sm text-white hover:bg-gray-700 cursor-pointer"
          >
            <Link href={`/${pagePath}`} locale={locale}>
              <ReactCountryFlag
                countryCode={getCountryCode(locale)}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  marginRight: "0.5em",
                }}
              />
              {locale.toUpperCase()}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
