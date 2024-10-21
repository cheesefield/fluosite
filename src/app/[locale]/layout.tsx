import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSWrapper from "@/components/AOSWrapper";
import { ReactNode } from "react";
import "../globals.css";

//i18n
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/config";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

const Inter = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("404Page.title"),
    default: "FluoSite",
    description: t("404Page.description"),
    metadataBase: new URL("https://fluosite.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        cs: "/cs",
      },
    },
    openGraph: {
      title: t("404Page.title"),
      description: t("404Page.description"),
      images: "/opengraph-image.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={Inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AOSWrapper>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AOSWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
