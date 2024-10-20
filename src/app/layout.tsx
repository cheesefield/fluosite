export const metadata = {
  metadataBase: new URL("https://fluosite.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      cs: "/cs",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
