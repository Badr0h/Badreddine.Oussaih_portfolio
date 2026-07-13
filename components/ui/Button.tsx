import type { ReactNode, ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  external?: boolean;
  download?: boolean;
} & Omit<ComponentProps<"button">, "children">;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg-deep hover:bg-accent-hover shadow-[0_0_24px_var(--accent-glow)]",
  secondary:
    "border border-border-strong bg-bg-elevated/80 text-text-primary backdrop-blur-sm hover:border-accent hover:text-accent",
  ghost:
    "text-text-secondary hover:text-accent hover:bg-accent-muted border border-transparent hover:border-border",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Button({
  children,
  variant = "primary",
  href,
  external,
  download,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
