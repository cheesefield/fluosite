import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import errorImage from "@/images/404-illustration.svg";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("404Page.title"),
    description: t("404Page.description"),
  };
}

export default function NotFound() {
  const t = useTranslations("404Page");

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-112px)] bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">{t("title")}</h1>
      <p className="mt-4 text-xl text-gray-600">{t("oopsMessage")}</p>
      <p className="mt-2 text-lg text-gray-500">{t("description")}</p>
      <div className="mt-6">
        <Link href={"/"}>
          <Button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-500 transition duration-300">
            {t("buttonText")}
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <Image
          src={errorImage.src}
          width={256}
          height={256}
          alt={t("imageAlt")}
          className="w-64 h-auto"
          priority={true}
        />
      </div>
    </div>
  );
}
