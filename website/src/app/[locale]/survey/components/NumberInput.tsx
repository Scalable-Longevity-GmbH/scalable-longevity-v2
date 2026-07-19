// components/ui/NumberInput.tsx
"use client";

export default function NumberInput({
  value,
  onChange,
  placeholder,
  min,
  max,
  unit,
}: {
  value: number | "";
  onChange: (v: number | "") => void;
  placeholder: string;
  min?: number;
  max?: number;
  unit?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          onChange(v === "" ? "" : Number(v));
        }}
        placeholder={placeholder}
        className="w-40 rounded-full border border-card-border bg-black/5 px-5 py-3 text-base text-font-primary placeholder:text-font-secondary focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {unit && <span className="text-base text-font-secondary">{unit}</span>}
    </div>
  );
}
