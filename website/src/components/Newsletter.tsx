"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { PillCTA } from "@/components/ui/PillCTA";
import { PillInput } from "@/components/ui/PillInput";

export default function Newsletter() {
  const t = useTranslations("Newsletter");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: "error", text: t("errors.empty") });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setMessage({ type: "error", text: t("errors.exists") });
        } else {
          setMessage({
            type: "error",
            text: data.error || t("errors.generic"),
          });
        }
        return;
      }

      setMessage({ type: "success", text: t("success") });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setMessage({ type: "error", text: t("errors.generic") });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center gap-10 text-black w-full px-6 md:px-20 min-h-[50vh]">
      <div className="flex flex-col justify-center items-center max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-medium">{t("title")}</h2>
        <p className="font-medium text-xl max-w-4xl mt-4">{t("lead")}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl flex flex-col gap-4"
      >
        <div className="w-full flex flex-row items-stretch gap-2">
          <PillInput
            type="email"
            placeholder={t("placeholder")}
            pillSize="md"
            bgClass="bg-black/10"
            textClass="text-font-primary placeholder-font-secondary"
            autoComplete="email"
            aria-label={t("ariaLabel")}
            className="flex-1"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage(null);
            }}
            disabled={isLoading}
            required
          />
          <PillCTA
            label={isLoading ? t("submitting") : t("submit")}
            size="md"
            bgClass="bg-primary"
            textClass="text-white"
            noIcon
            track={{
              event: "newsletter_subscribe_click",
              from: "home_newsletter",
              variant: "primary",
            }}
            className="flex-none"
            disabled={isLoading}
            onClick={handleSubmit}
          />
        </div>
        {message && (
          <p
            className={`text-center text-sm ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>
    </section>
  );
}
