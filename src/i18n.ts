import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Check if the locale is valid, using 'unknown' cast if necessary
  const validLocale = locale as unknown as (typeof locales)[number];

  if (!locales.includes(validLocale)) notFound(); // TS2345 fix

  return {
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
