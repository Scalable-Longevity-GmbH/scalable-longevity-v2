// components/survey/ResultsPreview.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Card from "../../survey/components/Card";
import HoverCard from "../../survey/components/HoverCard";
import { Info, Download, Mail, Check } from "lucide-react";
import type { ScoreResult, FormState } from "@/lib/surveyTypes";
import { useRouter } from "next/navigation";
import { generateSurveyPDF } from "@/lib/generatePDF";

export default function ResultsPreview({
  preview,
  chronoAge,
  form,
  onSave,
}: {
  preview: ScoreResult;
  chronoAge: number;
  form: FormState;
  onSave?: (email?: string) => Promise<void>;
}) {
  const bioAge = chronoAge + preview.totalDelta;
  const delta = preview.totalDelta;
  const absDelta = Math.abs(delta);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);
  const autoSaved = useRef(false);

  useEffect(() => {
    if (!onSave || autoSaved.current) return;
    if (form.share_data !== true) return;

    const timer = setTimeout(() => {
      if (!autoSaved.current) {
        autoSaved.current = true;
        onSave();
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [onSave, form.share_data]);

  const handleSaveEmail = async () => {
    if (!email.trim() || !onSave) return;
    autoSaved.current = true;
    await onSave(email.trim());
    setEmailSaved(true);
  };

  // ---- Gauge (halbkreis) ----
  // map delta in [-20,+20] Jahren auf [0..1] (rechts..links)
  const RANGE = 20; // map delta in [-20, +20] -> [0..1]
  const t = Math.max(0, Math.min(1, (delta + RANGE) / (2 * RANGE)));

  const cx = 160,
    cy = 160,
    r = 130; // center & radius (bigger)
  const C = Math.PI * r;
  const segLen = C / 3;

  const colors = ["#FDE2E2", "#FFE8CC", "#E0F3E8"];
  const dotColors = ["#E06363", "#E7A04E", "#4A8F74"];
  // invert index so positive delta (left) is red, negative (right) is green
  const segIndex = Math.min(2, Math.floor((1 - t) * 3));

  // indicator position along arc: t=0 (right) -> 0, t=1 (left) -> pi
  const theta = Math.PI * t;
  const ix = cx + r * Math.cos(theta);
  const iy = cy - r * Math.sin(theta);

  const stealers = [...preview.breakdown]
    .filter((b) => b.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-h-screen flex-col max-w-4xl flex items-center justify-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-10">
        {/* LEFT: Ergebnisse */}
        <Card>
          {/* Gauge */}
          <div className="flex flex-col items-center">
            <div className="relative w-[320px] h-[200px]">
              <svg
                viewBox="0 0 320 200"
                className="absolute inset-0 w-full h-full"
                aria-hidden
              >
                {/* 3 colored background segments */}
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy}`}
                    fill="none"
                    stroke={colors[i]}
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray={`${segLen} ${C - segLen}`}
                    strokeDashoffset={-(i * segLen)}
                  />
                ))}

                {/* indicator dot */}
                <circle
                  cx={ix}
                  cy={iy}
                  r="13"
                  fill="#fff"
                  stroke={dotColors[segIndex]}
                  strokeWidth="7"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
                />

                {/* Center number inside the circle */}
                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  fontSize="56"
                  fontWeight="bold"
                  fill="#2E4A3F"
                  style={{ fontFamily: "inherit" }}
                >
                  {absDelta.toFixed(1)}
                </text>
                <text
                  x={cx}
                  y={cy + 30}
                  textAnchor="middle"
                  fontSize="20"
                  fill="#6B7A7A"
                  style={{ fontFamily: "inherit" }}
                >
                  Pace of Aging <br />
                </text>
              </svg>
            </div>
          </div>

          {/* Bio / Chrono */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-xl font-semibold text-font-primary">
                {bioAge.toFixed(0)}
              </div>
              <div className="text-base text-font-secondary">
                Biologisches Alter
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-font-primary">
                {chronoAge.toFixed(0)}
              </div>
              <div className="text-base text-font-secondary">
                Chronologisches Alter
              </div>
            </div>
          </div>

          {/* Top 3 Räuber */}
          <div className="mt-8">
            <div className="text-base font-semibold text-font-primary text-center">
              Deine Top&nbsp;3 Lebenszeit-Räuber
            </div>
            <div className="mt-3 space-y-2">
              {stealers.map((b, i) => (
                <div
                  key={`${b.rule}-${i}`}
                  className="flex items-center justify-between rounded-[30px] border border-card-border bg-card pl-4 pr-2 py-2"
                >
                  <div className="flex items-center pl-auto">
                    <span className="text-base text-font-primary">
                      {b.rule}
                    </span>
                    <HoverCard
                      trigger={
                        <Info className="w-4 h-4 text-font-secondary flex" />
                      }
                      placement="top"
                    >
                      <div className="font-semibold mb-1">Warum zählt das?</div>
                      <p className="text-font-secondary">
                        Diese Gewohnheit bzw. dieser Faktor erhöht dein
                        biologisches Alter in unserem Modell.
                      </p>
                    </HoverCard>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E06363]/15 text-[#B33636] text-base font-semibold">
                    {b.delta.toFixed(0)}&nbsp;Jahre
                  </span>
                </div>
              ))}
              {stealers.length === 0 && (
                <div className="text-base text-font-secondary text-center">
                  Keine negativen Faktoren gefunden - stark!
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* RIGHT: Next Step und PDF-Karte */}
        <Card>
          <div className="flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-font-primary text-center mb-2">
                Nächste Schritte
              </h2>
              <p className="text-base text-font-secondary text-center">
                Lade deine Ergebnisse herunter oder starte den LifePath Engine
                für personalisierte Empfehlungen.
              </p>
            </div>

            {/* Optional email to link results to app account */}
            <div className="rounded-2xl border border-card-border bg-background p-4">
              <p className="text-sm text-font-secondary mb-3">
                E-Mail eingeben, um dein Ergebnis später mit deinem Konto zu
                verknüpfen.
              </p>
              {emailSaved ? (
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="w-4 h-4" />
                  <span>Gespeichert</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-font-secondary" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deine@email.de"
                      className="w-full pl-9 pr-3 py-2.5 rounded-full bg-card border border-card-border text-sm text-font-primary placeholder:text-font-secondary/50 focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSaveEmail}
                    disabled={!email.trim()}
                    className="px-4 py-2.5 rounded-full bg-primary text-white text-sm font-medium disabled:opacity-40 hover:opacity-95 transition cursor-pointer disabled:cursor-not-allowed"
                  >
                    Speichern
                  </button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={async () => {
                  if (!autoSaved.current && onSave) {
                    autoSaved.current = true;
                    await onSave(email.trim() || undefined);
                  }
                  await generateSurveyPDF(form, preview, chronoAge);
                }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-primary text-white hover:opacity-95 transition cursor-pointer font-medium text-base"
              >
                <Download className="w-5 h-5" />
                PDF Ergebnisse herunterladen
              </button>

              <button
                onClick={async () => {
                  if (!autoSaved.current && onSave) {
                    autoSaved.current = true;
                    await onSave(email.trim() || undefined);
                  }
                  router.push("/get-started");
                }}
                className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-black/20 text-white hover:bg-black/30 transition cursor-pointer font-medium text-base"
              >
                Start LifePath Engine
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
