"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type State = "loading" | "success" | "error";

export default function AuthCallbackPage() {
  const [state, setState] = useState<State>("loading");
  const [deepLink, setDeepLink] = useState("");

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash || hash.length < 2) {
      setState("error");
      return;
    }

    const fragment = hash.substring(1);

    const params = new URLSearchParams(window.location.search);
    const scheme = params.get("scheme");
    const host = params.get("host");

    let link: string;
    if (scheme === "exp" && host) {
      link = `exp://${host}/--/auth/callback#${fragment}`;
    } else {
      link = `agepilot://auth/callback#${fragment}`;
    }

    setDeepLink(link);
    setState("success");

    // Attempt auto-redirect to the app
    window.location.href = link;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image src="/logo.svg" alt="AgePilot" width={48} height={48} />
        </div>

        {/* Loading */}
        {state === "loading" && (
          <div className="animate-fade-in">
            <div className="mx-auto mb-6 h-8 w-8 rounded-full border-3 border-card-border border-t-primary animate-spin" />
            <p className="text-font-secondary text-base">
              Du wirst angemeldet...
            </p>
          </div>
        )}

        {/* Success */}
        {state === "success" && (
          <div className="animate-fade-in">
            {/* Checkmark */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/15">
              <svg
                className="h-7 w-7 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="text-xl font-semibold text-font-primary mb-2">
              Erfolgreich angemeldet
            </h1>
            <p className="text-font-secondary text-base mb-8">
              Die App sollte sich automatisch öffnen.
            </p>

            <a
              href={deepLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            >
              AgePilot öffnen
            </a>

            <a
              href="https://agepilot.de"
              className="block mt-5 text-sm text-font-muted hover:text-font-secondary transition"
            >
              Zurück zu agepilot.de
            </a>
          </div>
        )}

        {/* Error */}
        {state === "error" && (
          <div className="animate-fade-in">
            {/* X icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
              <svg
                className="h-7 w-7 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h1 className="text-xl font-semibold text-font-primary mb-2">
              Etwas ist schiefgelaufen
            </h1>
            <p className="text-font-secondary text-base mb-2">
              Es wurden keine Anmeldedaten gefunden.
            </p>
            <p className="text-font-secondary text-sm mb-8">
              Bitte versuche den Magic Link erneut über die App.
            </p>

            <a
              href="https://agepilot.de"
              className="block text-sm text-font-muted hover:text-font-secondary transition"
            >
              Zurück zu agepilot.de
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
