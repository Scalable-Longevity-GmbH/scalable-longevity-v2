// components/ui/Label.tsx
import React from "react";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-base font-semibold text-font-primary">
      {children}
    </label>
  );
}

export function Help({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-base text-font-secondary">{children}</p>;
}
