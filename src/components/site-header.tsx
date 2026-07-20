import Link from "next/link";
import { SITE } from "@/lib/site";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "animate-fade-in absolute inset-x-0 top-0 z-20"
          : "animate-fade-in sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur-sm"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`font-display text-sm font-semibold tracking-[0.18em] ${
            isOverlay ? "text-white" : "text-ink"
          }`}
        >
          {SITE.name}
        </Link>

        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            href="/about"
            className={`text-sm font-medium tracking-wide transition-colors ${
              isOverlay
                ? "text-white/85 hover:text-white"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            About
          </Link>
          <a
            href={SITE.phoneHref}
            className={`text-sm font-medium tracking-wide transition-colors ${
              isOverlay
                ? "text-white/90 hover:text-white"
                : "text-ink/70 hover:text-ink"
            }`}
          >
            {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
