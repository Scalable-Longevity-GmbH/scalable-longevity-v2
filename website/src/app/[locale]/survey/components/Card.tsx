import React from "react";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[30px] border border-card-border bg-card p-8",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
