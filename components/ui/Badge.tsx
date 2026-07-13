import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "accent" | "gold";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default:
      "border border-border bg-bg-muted/80 text-text-secondary",
    accent: "border border-accent/20 bg-accent-muted text-accent",
    gold: "border border-gold/20 bg-gold-muted text-gold",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[0.7rem] font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
