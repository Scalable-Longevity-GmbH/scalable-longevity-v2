"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";

type Placement = "top" | "bottom" | "left" | "right";

export default function HoverCard({
  trigger,
  children,
  placement = "top",
  className,
  openDelay = 80,
  closeDelay = 120,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: Placement;
  className?: string;
  openDelay?: number;
  closeDelay?: number;
}) {
  const [open, setOpen] = useState(false);
  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearTimers = () => {
    if (openTimer.current) window.clearTimeout(openTimer.current);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    openTimer.current = null;
    closeTimer.current = null;
  };

  const onEnter = () => {
    clearTimers();
    openTimer.current = window.setTimeout(() => setOpen(true), openDelay);
  };

  const onLeave = () => {
    clearTimers();
    closeTimer.current = window.setTimeout(() => setOpen(false), closeDelay);
  };

  const pos = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }[placement];

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
        aria-haspopup="dialog"
        aria-expanded={open}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        {trigger}
      </button>

      {/* Card */}
      {open && (
        <div
          role="tooltip"
          className={clsx(
            "absolute z-50 transition-all duration-150",
            pos,
            open ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div
            className={clsx(
              "pointer-events-auto w-64 rounded-xl border border-card-border bg-card p-3 text-sm shadow-lg text-font-primary",
              className
            )}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
