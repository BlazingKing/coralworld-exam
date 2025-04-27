"use client";

import DesktopView from "@/components/desktopview";
import MobileView from "@/components/mobileview";
import usePassportData from "@/hooks/usepassportdata";
import { useEffect, useState } from "react";

export default function Home() {
  const { data, isLoading } = usePassportData();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  const events = data;

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      {isMobile ? (
        <MobileView events={events} />
      ) : (
        <DesktopView events={events} />
      )}
    </main>
  );
}
