// components/ui/Segment.tsx
"use client";
import clsx from "clsx";

export default function Segment<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T | "";
  onChange: (v: T) => void;
  options: { label: string; value: T }[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={clsx(
              "rounded-full px-4 py-2 text-base font-medium transition border",
              active
                ? "bg-primary border-primary text-white"
                : "bg-white border-card-border text-font-primary hover:bg-white/70"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
