import { cookies } from "next/headers";
/* eslint-disable-next-line no-restricted-imports */
import { redirect } from "next/navigation";

// Server Component for the not-found page
export default function NotFound() {
  // Retrieve the locale from cookies, fallback to 'en' if not found
  const cookieLocale = cookies().get("NEXT_LOCALE")?.value || "en";

  // Redirect to the localized not-found page
  redirect(`/${cookieLocale}/404`);

  // This line won't be rendered as redirect happens
  return null;
}
