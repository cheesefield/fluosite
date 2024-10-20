import React from "react";
import { useTranslations } from "next-intl"; // Import useTranslations
import "aos/dist/aos.css";
import { Link } from "@/navigation";
// import blob from "@/images/blobs/blob (1).svg";
// import blob2 from "@/images/blobs/blob (7).svg";
// import blob3 from "@/images/blobs/blob (11).svg";
import Image from "next/image";
import oiltarator from "@/images/oiltarator.png";
import { FaBrush, FaEye, FaStar, FaGlobe, FaDollarSign } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

const HomePage = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("HomePage"); // Use translations for HomePage namespace
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-left min-h-screen bg-background text-center p-6 md:p-12 w-full"
      >
        <div className="w-full z-10">
          <h1
            className="text-5xl md:text-6xl font-bold mb-4 text-gray-900"
            data-aos="zoom-in-down"
          >
            {t("heroTitle")}
          </h1>
          <p
            className="text-lg md:text-xl mb-6 text-gray-800"
            data-aos="zoom-in-down"
            data-aos-delay="400"
          >
            {t("heroDescription")}
          </p>
          <Link
            href="https://calendly.com/fluosite/30min"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button data-aos="zoom-in" data-aos-delay="800">
              <FaBrush />
              {t("consultationButton")}
            </Button>
          </Link>
        </div>
        {/* Background Blobs */}
        {/* <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-64 md:w-80 lg:w-max left-0 top-64 lg:left-5 lg:top-44 opacity-70 ">
            <Image src={blob} alt="Blob" width={400} height={400} />
          </div>
          <div className="absolute w-72 md:w-96 lg:w-max right-0 top-20 lg:right-5 lg:top-16 opacity-70">
            <Image src={blob2} alt="Blob" width={500} height={500} />
          </div>
          <div className="absolute w-64 md:w-80 lg:w-max bottom-20 left-2/4 -translate-x-1/2 md:bottom-10 opacity-70 ">
            <Image src={blob3} alt="Blob" width={400} height={400} />
          </div>
        </div> */}
      </section>
      {/* Why Us Section */}
      <section id="why-us" className="py-24">
        <h2
          className="text-4xl font-bold text-center mb-12 flex flex-col-reverse"
          data-aos="fade-left"
        >
          {t("whyChooseUsTitle")}
          <span className="text-base uppercase underline text-primary">
            {t("whyChooseUsSpan")}
          </span>
        </h2>
        <div className="max-w-7xl mx-8 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div
            className="bg-primary text-gray-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <FaEye className="size-10 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t("expertise")}</h3>
            <p>{t("expertiseDescription")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FaStar className="size-10 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t("customization")}</h3>
            <p>{t("customizationDescription")}</p>
          </div>
          <div
            className="bg-primary text-gray-100 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FaGlobe className="size-10 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t("globalConnection")}</h3>
            <p>{t("globalConnectionDescription")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <FaDollarSign className="size-10 mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t("results")}</h3>
            <p>{t("resultsDescription")}</p>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-background">
        <h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 flex flex-col-reverse"
          data-aos="fade-left"
        >
          {t("portfolioTitle")}
          <span className="text-base uppercase underline text-primary">
            {t("portfolioSpan")}
          </span>
        </h2>
        <div className="max-w-7xl mx-8 xl:mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div
            className="bg-secondary rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={oiltarator.src}
              alt={t("oilTarator")}
              height={200}
              width={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">
                {t("oilTarator")}
              </h3>
              <p className="text-gray-800">{t("oilTaratorDescription")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section id="process" className="py-24">
        <h2
          className="text-4xl font-bold text-center mb-12 flex flex-col-reverse"
          data-aos="fade-left"
        >
          {t("processTitle")}
          <span className="text-base uppercase underline text-primary">
            {t("processSpan")}
          </span>
        </h2>
        <div className="max-w-7xl mx-8 xl:mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step1")}</h3>
            <p>{t("step1Description")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step2")}</h3>
            <p>{t("step2Description")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step3")}</h3>
            <p>{t("step3Description")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step4")}</h3>
            <p>{t("step4Description")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step5")}</h3>
            <p>{t("step5Description")}</p>
          </div>
          <div
            className="bg-secondary p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <h3 className="text-2xl font-bold mb-4">{t("step6")}</h3>
            <p>{t("step6Description")}</p>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-24 text-center bg-background">
        <div className="container mx-auto">
          <h2
            className="text-4xl font-bold mb-6 flex flex-col-reverse"
            data-aos="fade-left"
          >
            {t("freeDesign")}
            <span className="text-base uppercase underline text-primary">
              {t("consultationReady")}
            </span>
          </h2>
          <p className="mb-6" data-aos="fade-up">
            {t("consultationContact")}
          </p>
          <div
            className="calendly-inline-widget mx-auto bg-gray-900 rounded-lg overflow-hidden"
            style={{
              position: "relative",
              height: "800px",
              maxWidth: "1920px",
            }}
          >
            <iframe
              src="https://calendly.com/fluosite/30min?hide_gdpr_banner=1"
              width="100%"
              height="100%"
              title="Consultation Booking"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
