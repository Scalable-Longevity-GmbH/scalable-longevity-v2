"use client";

import { usePathname } from "next/navigation";
import HeaderNav from "./ui/HeaderNav";
import Footer from "./ui/Footer";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout =
    pathname.startsWith("/survey") || pathname.startsWith("/auth");

  return (
    <>
      {!hideLayout && <HeaderNav />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
