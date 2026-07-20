import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink px-6 py-10 text-mist/70 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight text-white">
            {SITE.name}
          </p>
          <p className="mt-1 text-sm tracking-wide">{SITE.tagline}</p>
          <div className="mt-4 flex gap-5 text-sm">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <a
              href={SITE.phoneHref}
              className="transition-colors hover:text-white"
            >
              Call
            </a>
          </div>
        </div>
        <p className="max-w-md text-sm leading-relaxed">
          Independently owned and operated. Serving Mississauga and the Greater
          Toronto Area. Listings available through REALTOR.ca and the Toronto
          Regional Real Estate Board.
        </p>
      </div>
    </footer>
  );
}
