"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize as per your needs
      once: true,
    });
    return () => {
      AOS.refresh(); // Ensures AOS is refreshed on route changes
    };
  }, []);

  return <>{children}</>;
}
