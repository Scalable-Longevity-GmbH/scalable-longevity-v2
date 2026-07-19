// components/ui/PillCTA.tsx
"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { track as vercelTrack } from "@vercel/analytics";

export type Size = "sm" | "md" | "lg";
type As = "button" | "link";

type TrackOpts = {
  event?: string;
  from?: string;
  variant?: string;
  extra?: Record<string, unknown>;
  enabled?: boolean;
};

export interface PillCTAProps {
  as?: As;
  href?: string;
  label: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: Size;
  className?: string;

  // colors
  bgClass?: string;
  textClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  style?: React.CSSProperties;

  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  track?: TrackOpts;

  /** If true, renders without the trailing icon puck */
  noIcon?: boolean;

  /** Optional compact overrides */
  paddingClass?: string;
  gapClass?: string;
  iconPuckSize?: number;
}

const sizeMap: Record<Size, { font: string; iconSize: string }> = {
  sm: { font: "text-sm", iconSize: "w-5 h-5" },
  md: { font: "text-base", iconSize: "w-6 h-6" },
  lg: { font: "text-lg", iconSize: "w-6 h-6" },
};

export function PillCTA({
  as = "button",
  href,
  label,
  Icon = ArrowUpRight,
  size = "md",
  className = "",
  bgClass = "bg-[#2E4A3F]",
  textClass = "text-white",
  iconBgClass = "bg-white",
  iconColorClass = "text-[#2E4A3F]",
  style,
  onClick,
  disabled,
  track = { enabled: true, event: "cta_click" },
  noIcon = false,
  paddingClass,
  gapClass,
  iconPuckSize,
}: PillCTAProps) {
  const s = sizeMap[size];

  // ✅ Your requested defaults
  const padding = paddingClass
    ? paddingClass
    : noIcon
    ? "py-4 px-5"
    : "py-2 pl-6 pr-2";

  const gap = noIcon ? "" : gapClass ?? "gap-5"; // ~20px

  const base = `
    group inline-flex items-center justify-between rounded-full
    ${padding} ${gap} ${s.font}
    ${bgClass} ${textClass}
    font-semibold backdrop-blur-2xl
    transition-colors
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
    disabled:opacity-60 disabled:cursor-not-allowed
  `;

  const puck = iconPuckSize ?? 55;
  const iconWrap = `
    flex items-center justify-center rounded-full ${iconBgClass}
    w-[${puck}px] h-[${puck}px] flex-shrink-0 transition-transform duration-200
    group-hover:translate-x-0.5 group-hover:-translate-y-0.5
  `;

  const iconCls = `${s.iconSize} ${iconColorClass}`;

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (track?.enabled !== false) {
      vercelTrack(track.event ?? "cta_click", {
        ...(track.from !== undefined ? { from: track.from } : {}),
        ...(track.variant !== undefined ? { variant: track.variant } : {}),
        ...(track.extra ?? {}),
        label,
      });
    }
  };

  const content = (
    <>
      <span className="font-semibold">{label}</span>
      {!noIcon && (
        <span className={iconWrap}>
          <Icon className={iconCls} />
        </span>
      )}
    </>
  );

  if (as === "link") {
    if (!href) throw new Error("PillCTA: 'href' is required when as='link'");
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`${base} ${className}`}
        style={style}
        aria-label={label}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${className} cursor-pointer`}
      style={style}
      disabled={disabled}
      aria-label={label}
    >
      {content}
    </button>
  );
}
