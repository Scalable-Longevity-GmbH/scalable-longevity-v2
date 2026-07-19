import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo() {
  return (
    <div className="text-xl font-bold text-white pl-3">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          className="rounded-full"
          width={30}
          height={30}
        />
        <p
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          AgePilot
        </p>
      </Link>
    </div>
  );
}
