"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { track } from "@vercel/analytics";

export default function SurveyEntryTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const src = searchParams.get("src");
    if (!src) return;

    const key = `entry_tracked_${src}`;
    if (sessionStorage.getItem(key)) return;

    track("survey_entry", { src });
    sessionStorage.setItem(key, "1");
  }, [searchParams]);

  return null;
}
